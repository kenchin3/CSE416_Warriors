import pandas as pd
from ast import literal_eval
import json
import csv
from shapely.geometry import Polygon
import libpysal as lps 
import geopandas as gpd
import numpy as np
import geojson


adjacencies = {}
# completeDf = pd.DataFrame(columns=["GEOID", "NAME", "STATE", "COUNTRY", "POP", "AREA", "NEIGHBORS"])

def getNeighbors(adjacencyFile):
    # adjacencyFile = ("./ok_cnty_2020_queen_adjacency.csv")
    
    with open(adjacencyFile) as f:
        heading = next(f)
        reader_obj = csv.reader(f)
        for row in reader_obj:
            if row[0] not in adjacencies:
                neighbors = literal_eval(row[1])
                adjacencies[row[0]] = neighbors
            else:
                neighbors = literal_eval(row[1])
                curr = set(adjacencies[row[0]])
                for i in neighbors:
                    curr.add(i)
                adjacencies[row[0]] = list(curr)
        # print(row[0], row[1])

def parseGeoJsonOK(file):
    parsed = []
    data = []
    df = pd.read_json(file)
    completeDf = pd.DataFrame(columns=["CODE", "STATE", "PRECINCT", "DIST", "NAME", "POP", "AREA", "NEIGHBORS"])

    with open(file, 'r') as f:
        data = json.load(f)

    print(data["features"][0]["properties"])
    print(data["features"][0]["geometry"]["coordinates"][0][0])
    Polygon(data["features"][2]["geometry"]["coordinates"][0])

    # data = np.array(data["features"]).sort(lambda x: x["properties"]["PRECINCT"])

    for i in data["features"]:
        
        precinct = i["properties"]["PRECINCT"]
        name = i["properties"]["CNTYNAME"]
        dist = i["properties"]["CD"]
        state = "ok"
        pop = i["properties"]["VAP"]
        code = "{}_{}_{}".format("ok", str(dist).zfill(2), str(precinct).zfill(4))
        coordinates = i["geometry"]["coordinates"][0]
        cleanCoordinates = []
    
        if geojson.is_valid(): 
            polygon_geom = Polygon(cleanCoordinates)
            polygon = gpd.GeoDataFrame(index=[0], crs='epsg:4326', geometry=[polygon_geom])
            # area = 0
            area = polygon.to_crs(3857).area / 2590000
            # area = polygon.to_crs(3857).area / 2590000
            neighbors = []
            # neighbors =  adjacencies[geoID[-5:]] if geoID[-5:] in adjacencies else []
            # neighbors = ",".join(neighbors)
        
            rowdata = pd.DataFrame([{"GEOID": code,
                    "STATE": state, 
                    "PRECINCT": precinct,
                    "DIST": dist, 
                    "NAME": name,
                    "POP": pop, 
                    "AREA": float(area), 
                    "NEIGHBORS": neighbors}])
        
            completeDf = pd.concat([completeDf, pd.DataFrame(rowdata)])

    return completeDf

def addCode(file):
    with open(file, 'r') as f:
        data = json.load(f)
    precinctIDNum = 1
    for j, i in enumerate(data["features"]):
        precinct = str(precinctIDNum).zfill(4) 
        precinctIDNum += 1
        dist = str(i["properties"]["CD_2011"]).zfill(2)
        code = "{}_{}_{}".format("pa", dist, precinct)
        i["properties"]["CODE"] = code

    with open('PA_1.json', 'w') as f:
        json.dump(data, f)


def parseGeoJsonPA(file):
    parsed = []
    data = []
    df = pd.read_json(file)
    completeDf = pd.DataFrame(columns=["CODE", "STATE", "PRECINCT", "DIST", "NAME", "POP", "AREA", "NEIGHBORS"])

    with open(file, 'r') as f:
        data = json.load(f)

    print(data["features"][0]["properties"])
    precinctIDNum = 1

    # file = ("./PA_pop.json")
    # shp = gpd.read_file(file)
    # rW = lps.weights.Rook.from_dataframe(shp)


    for j, i in enumerate(data["features"]):
        precinct = str(precinctIDNum).zfill(4) 
        precinctIDNum += 1
        name = i["properties"]["NAME10"]
        dist = str(i["properties"]["CD_2011"]).zfill(2)
        state = "pa"
        pop = i["properties"]["VAP"]
        code = "{}_{}_{}".format("pa", dist, precinct)
        area = i["properties"]["ALAND10"] + i["properties"]["AWATER10"]
        neighbors = ""

        rowdata = pd.DataFrame([{"CODE": code,
                   "STATE": state, 
                   "PRECINCT": precinct,
                   "DIST": dist, 
                   "NAME": name,
                   "POP": pop, 
                   "AREA": float(area), 
                   "NEIGHBORS": neighbors}])
      
        completeDf = pd.concat([completeDf, pd.DataFrame(rowdata)])


    return completeDf

def add_neighbors(file, df):
    neighbors = {}
    with open(file, 'r')  as file:
        csvreader = csv.reader(file)
        for row in csvreader:
            neighbors[row[0]] = row[1]
 
    for row in df["CODE"]:
        # print(row)
        if row in neighbors:
            df.loc[df["CODE"] == row, ["NEIGHBORS"]] = neighbors[row]
        else: 
            df.loc[df["CODE"] == row, ["NEIGHBORS"]] = ""
    return df
    # print(neighbors)

def df_to_csv(state, pd):
    pd.to_csv(state + "ProcessedData.csv", index = False)

def processOK():
    file = ("./OK_precincts.json")
    parsed = parseGeoJsonOK(file)
    df_to_csv("ok", parsed)

def processPA():
    addCode("./PA.json")
    file = ("./PA.json")
    parsed = parseGeoJsonPA(file)
    n = ("./pa_neighbors.csv")
    parsed = add_neighbors(n, parsed)
    df_to_csv("pa", parsed)



# processOK()
processPA()
# n = ("./pa_neighbors.csv")


