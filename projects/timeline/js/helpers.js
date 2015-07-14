/* Utils Specific to this project */
// ["#7800a8", "#3366ff", "#bcbc34", "#e3026f", "#b4002f", "#c39c95", "#fdb56d", "#fb9a99", "#b15928", "#a6cee3", "#cc70bc", "#ffc100", "#ff00d7", "#669c95", "#006d33", "#cab2d6", "#ff0000", "#00e7b4", "#ff8200", "#393d77", "#ff7a9a", "#33cc33", "#29bece", "#b2df8a", "#c6c6c6", "#c6c6c6"]
// ["#3366ff", "#ffc100", "#e3026f", "#669c95", "#393d77", "#ff8200", "#ff7a9a", "#b4002f", "#006d33", "#ff00d7", "#fdb56d", "#ff0000", "#fb9a99", "#33cc33", "#cab2d6", "#29bece", "#c39c95", "#a6cee3", "#b2df8a", "#bcbc34", "#7800a8", "#00e7b4", "#cc70bc", "#b15928", "#c6c6c6", "#c6c6c6"]
// ["#ff0000", "#393d77", "#c39c95", "#669c95", "#ffc100", "#006d33", "#33cc33", "#fdb56d", "#a6cee3", "#ff7a9a", "#cc70bc", "#ff00d7", "#b2df8a", "#ff8200", "#3366ff", "#fb9a99", "#b4002f", "#00e7b4", "#bcbc34", "#cab2d6", "#7800a8", "#29bece", "#e3026f", "#b15928"]
// ["#cab2d6", "#ffc100", "#a6cee3", "#669c95", "#b4002f", "#393d77", "#e3026f", "#00e7b4", "#cc70bc", "#ff0000", "#b2df8a", "#fdb56d", "#c39c95", "#29bece", "#ff8200", "#b15928", "#ff00d7", "#006d33", "#7800a8", "#33cc33", "#3366ff", "#bcbc34", "#ff7a9a", "#fb9a99"]
// ["#c39c95", "#bcbc34", "#a6cee3", "#b4002f", "#006d33", "#29bece", "#cab2d6", "#b15928", "#33cc33", "#cc70bc", "#ff8200", "#b2df8a", "#ff00d7", "#ffc100", "#393d77", "#e3026f", "#3366ff", "#fb9a99", "#ff7a9a", "#7800a8", "#669c95", "#00e7b4", "#fdb56d", "#ff0000"]
// ["#006d33", "#29bece", "#b4002f", "#a6cee3", "#b2df8a", "#669c95", "#7800a8", "#cc70bc", "#ff0000", "#ff7a9a", "#e3026f", "#ff00d7", "#bcbc34", "#3366ff", "#fdb56d", "#ffc100", "#33cc33", "#393d77", "#cab2d6", "#00e7b4", "#b15928", "#c39c95", "#fb9a99", "#ff8200"]
// ["#c6c6c6", "#c6c6c6", "#b4002f", "#bcbc34", "#cab2d6", "#006d33", "#ff7a9a", "#ff0000", "#33cc33", "#7800a8", "#ff8200", "#fb9a99", "#b15928", "#b2df8a", "#29bece", "#a6cee3", "#3366ff", "#ff00d7", "#00e7b4", "#669c95", "#cc70bc", "#c39c95", "#ffc100", "#e3026f", "#fdb56d", "#393d77"]
// ["#c6c6c6", "#c6c6c6", "#ff8200", "#cab2d6", "#a6cee3", "#393d77", "#ffc100", "#bcbc34", "#3366ff", "#00e7b4", "#b15928", "#fb9a99", "#006d33", "#ff0000", "#33cc33", "#29bece", "#b4002f", "#e3026f", "#fdb56d", "#cc70bc", "#c39c95", "#7800a8", "#b2df8a", "#669c95", "#ff00d7", "#ff7a9a"]
// ["#c6c6c6", "#c6c6c6", "#c39c95", "#bcbc34", "#29bece", "#fb9a99", "#cc70bc", "#33cc33", "#e3026f", "#7800a8", "#ff8200", "#669c95", "#ffc100", "#ff0000", "#ff7a9a", "#3366ff", "#b2df8a", "#ff00d7", "#393d77", "#b15928", "#006d33", "#fdb56d", "#cab2d6", "#b4002f", "#00e7b4", "#a6cee3"]
// ["#c6c6c6", "#c6c6c6", "#ffc100", "#b4002f", "#bcbc34", "#393d77", "#e3026f", "#00e7b4", "#ff7a9a", "#fb9a99", "#ff8200", "#3366ff", "#cab2d6", "#7800a8", "#ff0000", "#33cc33", "#a6cee3", "#c39c95", "#ff00d7", "#b2df8a", "#29bece", "#cc70bc", "#006d33", "#fdb56d", "#b15928", "#669c95"]
// ["#b2df8a", "#b15928", "#29bece", "#ff0000", "#c39c95", "#393d77", "#a6cee3", "#33cc33", "#7800a8", "#fdb56d", "#b4002f", "#cc70bc", "#fb9a99", "#bcbc34", "#e3026f", "#3366ff", "#00e7b4", "#ff7a9a", "#cab2d6", "#ff00d7", "#ffc100", "#669c95", "#006d33", "#ff8200", "#c6c6c6", "#c6c6c6"]
var c24 =['#33cc33','#ff0000','#3366ff','#00e7b4','#a6cee3','#fb9a99','#b15928','#b4002f','#bcbc34','#393d77','#ff8200','#7800a8','#ff00d7','#ffc100','#b2df8a','#fdb56d','#cab2d6','#c39c95','#29bece','#cc70bc','#669c95','#ff7a9a','#e3026f','#006d33']
var c24h =['#196619','#7f0000','#19337f','#00735a','#536771','#7d4d4c','#582c14','#5a0017','#5d5d1a','#1c1e3b','#7f4100','#3c0054','#7f006b','#7f6000','#586f44','#7e5a36','#64586a','#614e4a','#145e67','#66375d','#334e4a','#7f3c4d','#710137','#003619']
var blue = '#2800D7'
var orange = '#FB8E1E'
var palette =d3.shuffle(c24)
// var palette =['rgb(0, 115, 90)','#2800D7','#FB8E1E','rgb(90, 0, 23)','rgb(188, 188, 52)', 'rgb(120, 0, 168)']
// return (d.type=='Coal')?c24[10]:c24[11]

// var palette =['rgb(120, 0, 168)','rgb(0, 115, 90)',orange,blue]
// var palette =["#ffc100", "#b4002f", "#bcbc34" , "#393d77"]
var palette =["#b4002f", "#bcbc34" , "#393d77"]
// var palette =["#b2df8a", "#29bece","#b15928"]
var gray = ['#c6c6c6','#c6c6c6']
palette = gray.concat(palette)

var color = function(i) {return palette[i%palette.length]}

var time = d3.time.format('%b %Y')
var duration = 400

/* Utils Generic */
var numf = d3.format(',f')
var format = d3.time.format("%Y-%m-%d");

function tweenNum(d) {
  var i = d3.interpolate(this.textContent.replace(/\D/g, ''), d)

  return function(t) {
      this.textContent = numf(i(t));
  };
}

function unSlug(text){
    return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
}

function toSlug(text){
    return text.toLowerCase().replace(/ /g,'-').replace(/\//g,'').replace(/[^\w-]+/g,'')
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getJsonFromUrl() {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

// Array.prototype.clone = function() {
//   return _.map(this, _.clone)
// }

Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

function padLeft(s) {
  return ('00' + s).slice(-2)
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;

}
