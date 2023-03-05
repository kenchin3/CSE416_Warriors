import json

data1 = open('./../data/okDistrictData.json')
data2 = open('./../geoJSON/pa2022.json')
# outfile = open('./../data/ok2020DistrictData.json')

data1 = json.load(data1)
data2 = json.load(data2)
# outfile = json.load(outfile)["data"]

# outfile = json.load()
geoEvaluations = []
popEvaluations = []

for i in range(len(data1["features"])):
    print(i, data1["features"][i]["properties"]["POPULATION"], data1["features"][i]["properties"]["AREA"])
    # print(data2["features"][i]["properties"]["TOTAL"])
    # popEvaluations.append(data2["features"][i]["properties"]["POPULATION"] /data1["features"][i]["properties"]["POP100"] )
    # geoEvaluations.append(data2["features"][i]["properties"]["AREA"] / (data1["features"][i]["properties"]["AREALAND"] / 2590000))



print(geoEvaluations)
print(popEvaluations)
    
