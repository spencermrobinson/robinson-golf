const flex = [{label: "Women", value: "Women"},{label: "Senior", value: "Senior"},{label: "Reg", value: "Reg"},{label: "Stiff", value: "Stiff"},{label: "X-Stiff", value: "X-Stiff"}];
const length = [{label:'-2"', value:'-2"'},{label:'-1.5"', value:'-1.5"'},{label:'-1"', value:'-1"'},{label:'-.05"', value:'-.05"'},{label:"std", value:"0"},{label:'+.05"', value:'+.05"'},{label:'+1"', value:'+1"'},{label:'+1.5"', value:'+1.5"'},{label:'+2"', value:'+2"'}];
const loft = [{label: "8.5º", value:"8.5º"},{label: "9.5º", value:"9.5º"},{label: "10.5º", value:"10.5º"},{label: "13º", value:"13º"}];
const hybrid_loft = [{label: "13º", value:"13º"},{label: "15º", value:"15º"},{label: "18º", value:"18º"},{label: "20º", value:"20º"},{label: "23º", value:"23º"}];
const wedge_loft = [{label: "48º", value:"48º"},{label: "50º", value:"50º"},{label: "52º", value:"52º"},{label: "54º", value:"54º"},{label: "56º", value:"56º"},{label: "58º", value:"58º"},{label: "60º", value:"60º"},{label: "62º", value:"62º"},{label: "64º", value:"64º"}];

const color = [{label: "white", value:"white"},{label: "black", value:"black"},{label: "gray", value:"gray"},{label: "red", value:"red"},{label: "blue", value:"blue"},{label: "green", value:"green"},{label: "yellow", value:"yellow"},{label: "orange", value:"orange"},{label: "brown", value:"brown"}];
const gender =[{label: "Male", value: "Male"}, {label: "Female", value: "Female"}];
const apparel_size = [{label: "X-Small", value: "X-Small"},{label: "Small", value: "Small"},{label: "Med", value: "Med"},{label: "Large", value: "Large"},{label: "X-Large", value: "X-Large"},{label: "XX-Large", value: "XX-Large"}];
const shoe = [{label: "5", value:"5"},{label: "5.5", value:"5.5"},{label: "6", value:"6"},{label: "6.5", value:"6.5"},{label: "7", value:"7"},{label: "7.5", value:"7.5"},{label: "8", value:"8"},{label: "8.5", value:"8.5"},{label: "9", value:"9"},{label: "9.5", value:"9.5"},{label: "10", value:"10"},{label: "10.5", value:"10.5"},{label: "11", value:"11"},{label: "11.5", value:"11.5"},{label: "12", value:"12"}];
const apparel_class = [{label: "Shirt", value: "Shirt"},{label: "Sweater", value: "Sweater"},{label: "Pants", value: "Pants"},{label: "Shorts", value: "Shorts"},{label: "Socks", value: "Socks"},{label: "Hat", value: "Hat"},{label: "Other", value: "Other"}];

const brand = [{label: "Taylormade", value:"Taylormade"},{label: "Titleist", value:"Titleist"},{label: "Scotty-Cameron", value:"Scotty-Cameron"},{label: "Cobra", value:"Cobra"},{label: "Mizuno", value:"Mizuno"},{label: "Cleveland", value:"Cleveland"},{label: "UnderArmour", value:"UnderArmour"},{label: "Puma", value:"Puma"},{label: "Adidas", value:"Adidas"},{label: "FootJoy", value:"FootJoy"},{label: "Nike", value:"Nike"},{label: "Other", value:"Other"}];
const club_class = [{label:"Driver", value: "Driver"},{label:"Fairway", value: "Fairway"},{label:"Hybrid", value: "Hybrid"},{label:"Irons", value: "Irons"},{label:"Wedges", value: "Wedges"},{label:"Putter", value: "Putter"}]
export default {
    flex, 
    length,
    loft,
    color,
    gender,
    apparel_size,
    shoe,
    brand,
    club_class,
    hybrid_loft,
    wedge_loft,
    apparel_class
};