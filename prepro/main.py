# import sys
  
# # Insert the path of modules folder 
# sys.path.insert(0, "C:\\Users\\anila\\Desktop\\Task\\modules")
from graph import graph

# file = "./OK_precincts (2).json"
file = "./OK_precincts.json"

# cols_to_add = ["GEOID", "NAME", "STATE", "DIST", "VAP_TOT20", "CVAP_BLK20", "SLDL"]
# cols_to_add = ["STATEFP10", "COUNTYFP10", "CNTYNAME", "VAP", "USH18D", "USH18R", "CNTYFIPS", "CD","HDIST"]
# file = "./pa_gen_20_cong_prec.json"
# file = "./PA.json"
# graph = Graph.from_file(file)
# g = graph.Graph.to_json(graph.Graph.from_file(file, cols_to_add = cols_to_add,reproject=False, ignore_errors=True))
g = graph.Graph.from_file(file,  reproject=False, ignore_errors=True).to_json("ok_done.json")
print(g)
# graph.Graph.to_json("tn_done.json", g)