d3.queue()
  .defer(d3.json, '/argentina_indec.json')
  .defer(d3.csv, './sneep-2016.csv', function(row) {
    return {
      sexo_id: row.sexo_id,
      nivel_instruccion_id: row.nivel_instruccion_id,
      nacionalidad_id: row.nacionalidad_id,
      estado_civil_id: row.estado_civil_id,
      ultima_situacion_laboral_id: row.ultima_situacion_laboral_id,
      capacitacion_laboral_al_ingresar_id: row.capacitacion_laboral_al_ingresar_id,
      ultimo_lugar_residencia_id: row.ultimo_lugar_residencia_id,
      delito1_id: row.delito1_id,
      provincia_id: row.provincia_id,
      provincia_descripcion: row.provincia_descripcion
    }
  })
  .await(function(error, topology, ejecucionDePena) {
    if (error) throw error;


    var geoData = topojson.feature(topology, topology.objects.provincias).features;

    function setProvinciaId(el) {
      switch (el.properties.administrative_area[0].id) {
        case "CAB":
          el.properties.provincia_id = 24;
          el.properties.cantidadHabitantes = 2890151;
          el.properties["Hombres"] = 1335163;
          el.properties["Mujeres"] = 1555919;
          break;
        case "BUE":
          el.properties.provincia_id = 1;
          el.properties.cantidadHabitantes = 15625084;
          el.properties["Hombres"] = 7616917;
          el.properties["Mujeres"] = 7977511;
          break;
        case "CAT":
          el.properties.provincia_id = 2;
          el.properties.cantidadHabitantes = 367828;
          el.properties["Hombres"] = 182962;
          el.properties["Mujeres"] = 184858;
          break;
        case "CHA":
          el.properties.provincia_id = 5;
          el.properties.cantidadHabitantes = 1055259;
          el.properties["Hombres"] = 520643;
          el.properties["Mujeres"] = 532823;
          break;
        case "CHU":
          el.properties.provincia_id = 6;
          el.properties.cantidadHabitantes = 509108;
          el.properties["Hombres"] = 254289;
          el.properties["Mujeres"] = 252379;
          break;
        case "CBA":
          el.properties.provincia_id = 3;
          el.properties.cantidadHabitantes = 3308876;
          el.properties["Hombres"] = 1607428;
          el.properties["Mujeres"] = 1697397;
          break;
        case "COR":
          el.properties.provincia_id = 4;
          el.properties.cantidadHabitantes = 992595;
          el.properties["Hombres"] = 487276;
          el.properties["Mujeres"] = 506062;
          break;
        case "ERI":
          el.properties.provincia_id = 7;
          el.properties.cantidadHabitantes = 1235994;
          el.properties["Hombres"] = 606944;
          el.properties["Mujeres"] = 629356;
          break;
        case "FOR":
          el.properties.provincia_id = 8;
          el.properties.cantidadHabitantes = 530162;
          el.properties["Hombres"] = 261924;
          el.properties["Mujeres"] = 265971;
          break;
        case "JUJ":
          el.properties.provincia_id = 9;
          el.properties.cantidadHabitantes = 673307;
          el.properties["Hombres"] = 330364;
          el.properties["Mujeres"] = 341896;
          break;
        case "LAP":
          el.properties.provincia_id = 10;
          el.properties.cantidadHabitantes = 318951;
          el.properties["Hombres"] = 157093;
          el.properties["Mujeres"] = 159847;
          break;
        case "LRJ":
          el.properties.provincia_id = 11;
          el.properties.cantidadHabitantes = 333642;
          el.properties["Hombres"] = 164741;
          el.properties["Mujeres"] = 167106;
          break;
        case "MZA":
          el.properties.provincia_id = 12;
          el.properties.cantidadHabitantes = 1738929;
          el.properties["Hombres"] = 848823;
          el.properties["Mujeres"] = 892787;
          break;
        case "MIS":
          el.properties.provincia_id = 13;
          el.properties.cantidadHabitantes = 1101593;
          el.properties["Hombres"] = 547497;
          el.properties["Mujeres"] = 550332;
          break;
        case "NEU":
          el.properties.provincia_id = 14;
          el.properties.cantidadHabitantes = 551266;
          el.properties["Hombres"] = 274306;
          el.properties["Mujeres"] = 276038;
          break;
        case "RNO":
          el.properties.provincia_id = 15;
          el.properties.cantidadHabitantes = 638645;
          el.properties["Hombres"] = 314701;
          el.properties["Mujeres"] = 318673;
          break;
        case "SAL":
          el.properties.provincia_id = 16;
          el.properties.cantidadHabitantes = 1214441;
          el.properties["Hombres"] =  	600058;
          el.properties["Mujeres"] = 615149;
          break;
        case "SJU":
          el.properties.provincia_id = 17;
          el.properties.cantidadHabitantes = 681055;
          el.properties["Hombres"] = 334494;
          el.properties["Mujeres"] = 345933;
          break;
        case "SLU":
          el.properties.provincia_id = 18;
          el.properties.cantidadHabitantes = 432310;
          el.properties["Hombres"] = 213785;
          el.properties["Mujeres"] = 217803;
          break;
        case "SCR":
          el.properties.provincia_id = 19;
          el.properties.cantidadHabitantes = 273964;
          el.properties["Hombres"] = 140938;
          el.properties["Mujeres"] =  	131586;
          break;
        case "SFE":
          el.properties.provincia_id = 20;
          el.properties.cantidadHabitantes = 3194537;
          el.properties["Hombres"] = 1556365;
          el.properties["Mujeres"] = 1644371;
          break;
        case "SGO":
          el.properties.provincia_id = 21;
          el.properties.cantidadHabitantes = 874006;
          el.properties["Hombres"] = 443008;
          el.properties["Mujeres"] = 453453;
          break;
        case "TDF":
          el.properties.provincia_id = 22;
          el.properties.cantidadHabitantes = 127205;
          el.properties["Hombres"] = 64885;
          el.properties["Mujeres"] = 61325;
          break;
        case "TUC":
          el.properties.provincia_id = 23;
          el.properties.cantidadHabitantes = 1448200;
          el.properties["Hombres"] = 710635;
          el.properties["Mujeres"] = 737565;
          break;
      }
    }


    geoData.forEach(geo => {
      setProvinciaId(geo);
      var ejecucionPorProvincia = ejecucionDePena.filter(function(dato) {
        var provincia = +geo.properties.provincia_id;
        var provinciano = +dato.provincia_id;
        return provincia === provinciano;
      });
      geo.properties.datosCarceles = cargarDatos(ejecucionPorProvincia);
    })

    // geoData.forEach(function(el) {
    //   // console.log(el.properties.administrative_area[0].name);
    //   // console.log(el.properties.administrative_area[0].id);
    //   console.log(el.properties.datosCarceles);
    // });


    var width = 960,
      height = 700;

    var projection = d3.geoTransverseMercator()
                       .center([2.5, -38.5])
                       .rotate([66, 0])
                       .scale((height * 56.5) / 33)
                       .translate([(width / 2), (height / 2)]);

    var path = d3.geoPath()
                 .projection(projection);

 var tooltip = d3.select("body")
                 .append("div")
                   .classed("tooltip", true);

    d3.select("#svgMap")
        .attr("width", width)
        .attr("height", height)
      .append ("g")
      .selectAll(".provincia")
        .data(geoData)
      .enter()
        .append("path")
        .classed("provincia", true)
        .attr("d", path)
        .on("mousemove", showTooltip)
        .on("touchstart", showTooltip)
        .on("mouseout", hideTooltip)
        .on("touchend", hideTooltip);


    var select = d3.select("#selectMapa");

    select
      .on("change", d => setColor(d3.event.target.value));

    setColor(select.property("value"));

    function setColor(val) {

      var colorRanges = {
        "Hombres": ["white", "purple"],
        "Mujeres": ["white", "red"],
        poblacion: ["white", "black"],
        fertilityRate: ["black", "orange"]
      };

      var scale = d3.scaleLinear()
                    .domain([0, d3.max(geoData, d => {
                      if (val === "poblacion") {
                        return d.properties.cantidadHabitantes;
                      } else {
                        return (d.properties.datosCarceles.genero[val] * 100) / d.properties[val];
                      }
                    })])
                    .range(colorRanges[val]);

      d3.selectAll(".provincia")
          .transition()
          .duration(750)
          .ease(d3.easeBackIn)
          .attr("fill", d => {
            var data = val === "poblacion" ? d.properties.cantidadHabitantes : (d.properties.datosCarceles.genero[val] * 100) / d.properties[val];
            return data ? scale(data) : "#ccc";
          });
    }



      function showTooltip(d) {
        var tool;
        switch (select.property("value")) {
          case "Hombres":
            tool = `
            <p>${d.properties.administrative_area[0].name}</p>
            <p>Cantidad de hombres:  ${d.properties["Hombres"].toLocaleString()}</p>
            <p>Cantidad de hombres presos:  ${d.properties.datosCarceles.genero["Hombres"].toLocaleString()}</p>
            <p>Porcentaje: ${((d.properties.datosCarceles.genero["Hombres"] * 100) / d.properties["Hombres"]).toFixed(4)}%</p>
            `
            break;
          case "Mujeres":
          tool = `
          <p>${d.properties.administrative_area[0].name}</p>
          <p>Cantidad de mujeres:  ${d.properties["Mujeres"].toLocaleString()}</p>
          <p>Cantidad de mujeres presas:  ${d.properties.datosCarceles.genero["Mujeres"].toLocaleString()}</p>
          <p>Porcentaje: ${((d.properties.datosCarceles.genero["Mujeres"] * 100) / d.properties["Mujeres"]).toFixed(4)}%</p>
          `
            break;
          case "poblacion":
          tool = `
          <p>${d.properties.administrative_area[0].name}</p>
          <p>Cantidad de habitantes:  ${d.properties.cantidadHabitantes.toLocaleString()}</p>
          `
            break;
        }
        tooltip
          .style("opacity", "1")
          .style("left", d3.event.x - (tooltip.node().offsetWidth /2) + "px")
          .style("top", d3.event.y + 25 + "px")
          .html(tool);
      }

      function hideTooltip() {
        tooltip
          .style("opacity", "0");
      }





var baseDeDatos = cargarDatos(ejecucionDePena);

var inputInicio = d3.select("#selectTabla").property("value");

var datosInicio = agregarValores(inputInicio);
var datosInicioKeys = Object.getOwnPropertyNames(baseDeDatos[inputInicio]);

function agregarValores(seccion) {
  var arr = [];
  for(element in baseDeDatos[seccion]) arr.push(baseDeDatos[seccion][element]);
  return arr;
}


var minElement = d3.min(datosInicio);
var maxElement = d3.max(datosInicio);
var barPadding = 10;
var numBars = datosInicio.length;
var barWidth = width / numBars - barPadding;


var xScale = d3.scaleLinear()
               .domain([0, maxElement])
               .rangeRound([0, width]);


 var yScale = d3.scaleLinear()
                 .domain([0, maxElement])
                 .range([height/2, 0]);



var bars = d3.select("#svgCuadro")
               .attr("width", width)
               .attr("height", height)
             .selectAll(".bar")
             .data(datosInicio)
             .enter()
             .append("g")
              .classed("bar", true);



bars
  .append("rect")
    .attr("width", barWidth)
    .attr("height", function(d) {
      return height/2 - yScale(d);
    })
    .attr("y", function(d) {
      return (yScale(d) + height/2);
    })
    .attr("x", function(d, i) {
      return (barWidth + barPadding) * i;
    })
    .attr("fill", "red");

bars
.append("text")
.classed("title", true)
.text((d, i) => datosInicioKeys[i] + ": " + datosInicio[i].toLocaleString())
.attr("transform", "rotate(-90)")
.attr("width", barWidth)
.attr("y", (d, i) => (barWidth/2 + 5 + ((barWidth + barPadding) * i)))
.attr("x", (d) => -(height/2 + yScale(d)) +20)
// .style("text-anchor", "middle")
.style("font-size", "1.1em")
.attr("fill", "black");




var select2 = d3.select("#selectTabla");

select2.on("change", function() {

  var datos = agregarValores(d3.event.target.value);
  var datosKeys = Object.getOwnPropertyNames(baseDeDatos[d3.event.target.value]);
  maxElement = d3.max(datos);
  numBars = datos.length;
  barWidth = width / numBars - barPadding;

  yScale = d3.scaleLinear()
                  .domain([0, maxElement])
                  .range([height/2, 0]);

xScale.domain([0, d3.max(datos)])
                        .rangeRound([0, width]);

console.log(datos);



      var update = d3.select("#svgCuadro")
                        .selectAll(".bar")
                        .data(datos);


      update
        .exit()
        .remove();

      var bars = update
      .enter()
      .append("g")
        .classed("bar", true);


      bars.append("rect");
      bars.append("text");

      bars
        .merge(update)
        .select("rect")
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .delay((d, i) => i * 200)
        .on("start", function(d, i) {
          if (i===0) {
            d3.select(".title")
              // .text("Actualizando la data de ");
          }
        })
        .on("end", function(d, i, nodes) {
          if (i === nodes.length - 1) {
            d3.select(".title")
              // .text("Nacimientos en ");
          }
        })
          .attr("width", barWidth)
          .attr("height", function(d) {
            return height/2 - yScale(d);
          })
          .attr("y", function(d) {
            return (yScale(d) + height/2);
          })
          .attr("x", function(d, i) {
            return (barWidth + barPadding) * i;
          })
          .attr("fill", "red");

          bars
            .merge(update)
            .select("text")
            .classed("title", true)
            .transition()
            .duration(1000)
            .ease(d3.easeLinear)
            .delay((d, i) => i * 200)
            .on("end", end)
            .text((d, i) => datosKeys[i] + ": " + datos[i].toLocaleString())
            .attr("transform", "rotate(-90)")
            .attr("width", barWidth)
            .attr("y", (d, i) => (barWidth/2 + 5 + ((barWidth + barPadding) * (i)) ))
            .attr("x", (d) => -(height/2 + yScale(d)) +20 )
            .style("font-size", "1.1em")
            .attr("fill", "black");



function start(d, i) {
  if (i===0) {
    d3.select(".title")
      .text("Actualizando la data de ");
  }
}

function end(d, i, nodes) {
  if (i === nodes.length - 1) {
    d3.select(".title")
      //.text(datosKeys[i]);
  }
}

});



// var prueba;
// prueba = cargarDatos(ejecucionDePena);
// console.log(prueba);

  function cargarDatos(arr) {
    var carceles = {
      niveldeInstrucción: {
        "Sin Datos": 0,
        "Ninguno": 0,
        "Primario Incompleto": 0,
        "Primario Completo": 0,
        "Secundario Incompleto": 0,
        "Secundario Completo": 0,
        "Terciario Incompleto": 0,
        "Terciario Completo": 0,
        "Universitario Incompleto": 0,
        "Universitario Completo": 0,
        "EGB1 Incompleto": 0,
        "EGB1 Completo": 0,
        "EGB2 Incompleto": 0,
        "EGB2 Completo": 0,
        "EGB3 Incompleto": 0,
        "EGB3 Completo": 0,
        "Polimodal Incompleto": 0,
        "Polimodal Completo": 0,
      },
      genero: {
        "Hombres": 0,
        "Mujeres": 0,
        "Transexuales": 0
      },
      nacionalidad: {
        "Argentinos": 0,
        "Extranjeros": 0,
        "Sin Datos": 0,
      },
      estadoCivil: {
        "Sin Datos": 0,
        "Solteros": 0,
        "Casados": 0,
        "Viudos": 0,
        "Separados": 0,
        "Concubinos": 0,
        "Separados de hecho": 0
      },
      ultimaSituacionLaboral: {
        "Sin Datos": 0,
        "Trabajador Tiempo Completo": 0,
        "Trabajador Tiempo Parcial": 0,
        "Desocupado": 0
      },
      capacitacionLaboral: {
        "Sin Datos": 0,
        "Tiene Algun Oficio": 0,
        "Tiene Alguna Profesion": 0,
        "No Tiene ni Oficio ni Profesion": 0
      },
      ultimoLugarDeResidencia: {
        "Urbano": 0,
        "Rural": 0,
        "Sin Datos": 0
      },
      delito: {
        "Sin Datos": 0,
        "Homicidio doloso": 0,
        "Homicidio doloso (tent.)": 0,
        "Homicidio culposo": 0,
        "Lesiones dolosas": 0,
        "Lesiones culposas": 0,
        "Otros delitos contra las personas": 0,
        "Delitos contra el honor": 0,
        "Violaciones": 0,
        "Otros delitos contra la honestidad": 0,
        "Amenazas": 0,
        "Privación ilegítima de la libertad": 0,
        "Del. contra la lib. comet. por func. público": 0,
        "Otros delitos contra la libertad": 0,
        "Hurto y/o tentativa de hurto": 0,
        "Robo y/o tentativa de robo": 0,
        "Otros delitos contra la propiedad": 0,
        "Delitos contra la seguridad pública": 0,
        "Delitos c/el orden público": 0,
        "Delitos contra la seguridad de la nación": 0,
        "Delitos contra los poderes publicos": 0,
        "Delitos c/ la administracion pública": 0,
        "Delitos c/ la fe pública": 0,
        "Delitos c/ el estado civil": 0,
        "Infracción ley n° 23.737 (estupefacientes)": 0,
        "Infraccion ley n° 24.769 penal tributaria": 0,
        "Infraccion ley n° 13.944 incumplimiento de deberes": 0,
        "Delitos previstos en leyes especiales": 0,
        "Contravenciones": 0
      }
    }
    for (var i = 0; i < arr.length; i++) {
      var p = arr[i];
      if (p.sexo_id === "1") carceles.genero["Hombres"]++;
      if (p.sexo_id === "2") carceles.genero["Mujeres"]++;
      if (p.sexo_id === "3") carceles.genero["Transexuales"]++;
      if (+p.nivel_instruccion_id === 0) carceles.niveldeInstrucción["Sin Datos"]++;
      if (+p.nivel_instruccion_id === 1) carceles.niveldeInstrucción["Ninguno"]++;
      if (+p.nivel_instruccion_id === 2) carceles.niveldeInstrucción["Primario Incompleto"]++;
      if (+p.nivel_instruccion_id === 3) carceles.niveldeInstrucción["Primario Completo"]++;
      if (+p.nivel_instruccion_id === 4) carceles.niveldeInstrucción["Secundario Incompleto"]++;
      if (+p.nivel_instruccion_id === 5) carceles.niveldeInstrucción["Secundario Completo"]++;
      if (+p.nivel_instruccion_id === 6) carceles.niveldeInstrucción["Terciario Incompleto"]++;
      if (+p.nivel_instruccion_id === 7) carceles.niveldeInstrucción["Terciario Completo"]++;
      if (+p.nivel_instruccion_id === 8) carceles.niveldeInstrucción["Universitario Incompleto"]++;
      if (+p.nivel_instruccion_id === 9) carceles.niveldeInstrucción["Universitario Completo"]++;
      if (+p.nivel_instruccion_id === 10) carceles.niveldeInstrucción["EGB1 Incompleto"]++;
      if (+p.nivel_instruccion_id === 11) carceles.niveldeInstrucción["EGB1 Completo"]++;
      if (+p.nivel_instruccion_id === 12) carceles.niveldeInstrucción["EGB2 Incompleto"]++;
      if (+p.nivel_instruccion_id === 13) carceles.niveldeInstrucción["EGB2 Completo"]++;
      if (+p.nivel_instruccion_id === 14) carceles.niveldeInstrucción["EGB3 Incompleto"]++;
      if (+p.nivel_instruccion_id === 15) carceles.niveldeInstrucción["EGB3 Completo"]++;
      if (+p.nivel_instruccion_id === 16) carceles.niveldeInstrucción["Polimodal Incompleto"]++;
      if (+p.nivel_instruccion_id === 17) carceles.niveldeInstrucción["Polimodal Completo"]++;
      if (+p.nacionalidad_id === 0) carceles.nacionalidad["Sin Datos"]++;
      if (+p.nacionalidad_id === 1) {carceles.nacionalidad["Argentinos"]++;}
      else {carceles.nacionalidad["Extranjeros"]++;}
      if (+p.estado_civil_id === 0) carceles.estadoCivil["Sin Datos"]++;
      if (+p.estado_civil_id === 1) carceles.estadoCivil["Solteros"]++;
      if (+p.estado_civil_id === 2) carceles.estadoCivil["Casados"]++;
      if (+p.estado_civil_id === 3) carceles.estadoCivil["Viudos"]++;
      if (+p.estado_civil_id === 4) carceles.estadoCivil["Separados"]++;
      if (+p.estado_civil_id === 5) carceles.estadoCivil["Separados de hecho"]++;
      if (+p.estado_civil_id === 6) carceles.estadoCivil["Concubinos"]++;
      if (+p.ultima_situacion_laboral_id === 0) carceles.ultimaSituacionLaboral["Sin Datos"]++;
      if (+p.ultima_situacion_laboral_id === 1) carceles.ultimaSituacionLaboral["Trabajador Tiempo Completo"]++;
      if (+p.ultima_situacion_laboral_id === 2) carceles.ultimaSituacionLaboral["Trabajador Tiempo Parcial"]++;
      if (+p.ultima_situacion_laboral_id === 3) carceles.ultimaSituacionLaboral["Desocupado"]++;
      if (+p.capacitacion_laboral_al_ingresar_id === 0) carceles.capacitacionLaboral["Sin Datos"]++;
      if (+p.capacitacion_laboral_al_ingresar_id === 1) carceles.capacitacionLaboral["Tiene Algun Oficio"]++;
      if (+p.capacitacion_laboral_al_ingresar_id === 2) carceles.capacitacionLaboral["Tiene Alguna Profesion"]++;
      if (+p.capacitacion_laboral_al_ingresar_id === 3) carceles.capacitacionLaboral["No Tiene ni Oficio ni Profesion"]++;
      if (+p.ultimo_lugar_residencia_id === 0) carceles.ultimoLugarDeResidencia["Sin Datos"]++;
      if (+p.ultimo_lugar_residencia_id === 1) carceles.ultimoLugarDeResidencia["Rural"]++;
      if (+p.ultimo_lugar_residencia_id === 2) carceles.ultimoLugarDeResidencia["Urbano"]++;
      if (+p.delito1_id === 0) carceles.delito["Sin Datos"]++;
      if (+p.delito1_id === 1) carceles.delito["Homicidio doloso"]++;
      if (+p.delito1_id === 2) carceles.delito["Homicidio doloso (tent.)"]++;
      if (+p.delito1_id === 3) carceles.delito["Homicidio culposo"]++;
      if (+p.delito1_id === 4) carceles.delito["Lesiones dolosas"]++;
      if (+p.delito1_id === 5) carceles.delito["Lesiones culposas"]++;
      if (+p.delito1_id === 6) carceles.delito["Otros delitos contra las personas"]++;
      if (+p.delito1_id === 7) carceles.delito["Delitos contra el honor"]++;
      if (+p.delito1_id === 8) carceles.delito["Violaciones"]++;
      if (+p.delito1_id === 9) carceles.delito["Otros delitos contra la honestidad"]++;
      if (+p.delito1_id === 10) carceles.delito["Amenazas"]++;
      if (+p.delito1_id === 11) carceles.delito["Privación ilegítima de la libertad"]++;
      if (+p.delito1_id === 12) carceles.delito["Del. contra la lib. comet. por func. público"]++;
      if (+p.delito1_id === 13) carceles.delito["Otros delitos contra la libertad"]++;
      if (+p.delito1_id === 14) carceles.delito["Hurto y/o tentativa de hurto"]++;
      if (+p.delito1_id === 15) carceles.delito["Robo y/o tentativa de robo"]++;
      if (+p.delito1_id === 16) carceles.delito["Otros delitos contra la propiedad"]++;
      if (+p.delito1_id === 17) carceles.delito["Delitos contra la seguridad pública"]++;
      if (+p.delito1_id === 18) carceles.delito["Delitos c/el orden público"]++;
      if (+p.delito1_id === 19) carceles.delito["Delitos contra la seguridad de la nación"]++;
      if (+p.delito1_id === 20) carceles.delito["Delitos contra los poderes publicos"]++;
      if (+p.delito1_id === 21) carceles.delito["Delitos c/ la administracion pública"]++;
      if (+p.delito1_id === 22) carceles.delito["Delitos c/ la fe pública"]++;
      if (+p.delito1_id === 23) carceles.delito["Delitos c/ el estado civil"]++;
      if (+p.delito1_id === 24) carceles.delito["Infracción ley n° 23.737 (estupefacientes)"]++;
      if (+p.delito1_id === 25) carceles.delito["Infraccion ley n° 24.769 penal tributaria"]++;
      if (+p.delito1_id === 26) carceles.delito["Infraccion ley n° 13.944 incumplimiento de deberes"]++;
      if (+p.delito1_id === 27) carceles.delito["Delitos previstos en leyes especiales"]++;
      if (+p.delito1_id === 28) carceles.delito["Contravenciones"]++;
    }
    return carceles;
  }

  });
