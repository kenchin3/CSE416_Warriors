import geopandas as gp
import pandas as pd
from graph import graph


df = gp.read_file("./data/PA_pop.json")

df2 = pd.read_csv("./data/14-20.csv")
cols_to_add = ["GEOID20", "NAME", "NAME20", "CON20D", "CON20R", "STATEFP20", "VAP20","2MOREVAP20","BVAP20","HISP20"]
df2 = df2[cols_to_add]

df = df.drop_duplicates(subset='GEOID20', keep="first")
df2 = df2.drop_duplicates(subset='GEOID20', keep="first")

df = df.merge(df2, how='left', on="GEOID20")
df = df.rename(columns={"NAME_x": "NAME", "NAME20_x": "NAME20", "STATEFP20_x": "STATEFP20"})
cols_to_add = ["GEOID20", "NAME", "CON20D", "CON20R", "VAP20","2MOREVAP20","BVAP20","HISP20", "COUNTYFP20", "STATEFP20", "CD"]

df3 = gp.read_file("./data/pa_cvap_2020_cd.json")
df3 = df3[["geometry", "CD"]]

df = df.sjoin(df3, how="left", predicate="intersects")
df = df.drop_duplicates(subset="GEOID20", keep="first")
df = df.to_crs(crs=4326)


file_out="./out/pa_done.json"
g = graph.Graph.from_geodataframe(df, cols_to_add = cols_to_add, reproject=True, ignore_errors=True).to_json(file_out)

out = df.to_json()
with open('./out/pa_boundary.json', 'w') as f:
    f.write(out)
