import libpysal as lps
import geopandas as gpd
import csv


state = "ok"
file = ("./ok_boundary.json")
shp = gpd.read_file(file)

rW = lps.weights.Rook.from_dataframe(shp, idVariable="GEOID")

outputName = state + "_neighbors.csv"
header = ['id','NEIGHBORS']

with open(outputName, 'w', newline='') as csv_out:
    writeCSV = csv.writer(csv_out, delimiter=',')
    writeCSV.writerow(header)
    for row in rW:
        id = row[0]
        neighbors = row[1]
        neighborIDs = list(neighbors.keys())
        n = []
        for i in neighborIDs:
                n.append(i)
        neighborString = ",".join(n)
        writeCSV.writerow([row[0], neighborString])
csv_out.close() 

