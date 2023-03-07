const express  = require('express');
const app = express();
app.use(express.static(__dirname + "/public/"));
const dfff = require('dialogflow-fulfillment');
const { raw } = require('express');
const { platform } = require('os');
const axios = require("axios");
var emoji = require('node-emoji');
const { DateTime } = require('actions-on-google');
const { get, random } = require('node-emoji/lib/emoji');
const { TIMEOUT } = require('dns');
const { Agent } = require('http');
const { time } = require('console');

function Ramdom(){
  var number = Math.floor(Math.random() * ((11+1) - 1) + 1);
  var hoy = new Date();
  var minutes = hoy.getMinutes();
  var stringminutes = minutes.toString();
  var num = stringminutes.substr(1);
  var intnum = parseInt(num);
  console.log(stringminutes);
  console.log(intnum);
  var ram = 0;
  if(num=='0'){
    ram = 10;
  }else{
    ram = intnum;
  }
 
  return ram
 }


app.post('/', express.json(), (req, res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    });
    

    function sleep(millis){
      return new Promise(resolve => setTimeout(resolve, millis));
    }

    function custompayload(agent){
        
        var payloadData = {
            "richContent": [
    [
        {
            "type": "image",
            "rawUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ria_Main_Logo_Descriptor_Color_RGB.png",
            "accessibilityText": "Dialogflow across platforms"
          },  
          {
            "type": "divider"
          },
          {
            "type": "description",
            "text": [
                "Hi welcome to RIA´s Agent Live chat  "+emoji.get('😄') +" \n \n Were are here to help!"+"\n\n"+" One of our representatives will be with you shortly."
              ]
            
          },
          {
            "type": "divider"
          },
         
    ]
  ]
          }
     
   console.log("run");
   agent.add( new dfff.Payload(agent.UNSPECIFIED,payloadData, {sendAsMessage: true,rawPayload:true}))
   agent.add("Hi i´m Maya! What´s your name? 😀")  
   return sleep("4000")
    }

    function custompayload2(agent){
        
      var payloadData = {
        "richContent": [
          [
            {
              "type": "chips",
              "options": [
                {
                  "link": "",
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  },
                  "text": "🔐 Password "
                },
                {
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  },
                  "link": "",
                  "text": " ⚙️ Tech Support"
                },
                {
                  "link": "",
                  "text": " ❗ System Issue",
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  }
                },
                {
                  "text": " ✔️  Permission",
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  },
                  "link": ""
                },
                {
                  "text": "📙  Training",
                  "link": "",
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  }
                },
                {
                  "text": " 🌐 Connectivity Error",
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  },
                  "link": ""
                },
                {
                  "text": "  💻  Computer hardware",
                  "link": "",
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  }
                },
                {
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  },
                  "link": "",
                  "text": " 🌎 Location"
                }
              ]
            }
          ]
        ]
        }
   
 console.log("run");
 agent.add("Thank you."+"\n\n"+"Do you need help with any of the following options ?")
 agent.add( new dfff.Payload(agent.UNSPECIFIED,payloadData, {sendAsMessage: true,rawPayload:true}))
 agent.add("If you have another request, please feel free to describe it below.")  
 return sleep("3000")
  }


  function custompayload2SP(agent){
        
    var payloadData = {
      "richContent": [
        [
          {
            "type": "chips",
            "options": [
              {
                "link": "",
                "image": {
                  "src": {
                    "rawUrl": ""
                  }
                },
                "text": "🔐 Contraseña "
              },
              {
                "image": {
                  "src": {
                    "rawUrl": ""
                  }
                },
                "link": "",
                "text": " ⚙️ Soporte técnico"
              },
              {
                "link": "",
                "text": " ❗ Problema del sistema",
                "image": {
                  "src": {
                    "rawUrl": ""
                  }
                }
              },
              {
                "text": " ✔️  Permisos",
                "image": {
                  "src": {
                    "rawUrl": ""
                  }
                },
                "link": ""
              },
              {
                "text": "📙  Entrenamiento",
                "link": "",
                "image": {
                  "src": {
                    "rawUrl": ""
                  }
                }
              },
              {
                "text": " 🌐 Error de conectividad",
                "image": {
                  "src": {
                    "rawUrl": ""
                  }
                },
                "link": ""
              },
              {
                "text": "  💻  Equipo de PC",
                "link": "",
                "image": {
                  "src": {
                    "rawUrl": ""
                  }
                }
              },
              {
                "image": {
                  "src": {
                    "rawUrl": ""
                  }
                },
                "link": "",
                "text": " 🌎 Ubicación"
              }
            ]
          }
        ]
      ]
      }
 
console.log("run");
agent.add("Muchas gracias."+"\n\n"+"¿Necesitas apoyo con alguna de las siguientes opciones?")
agent.add( new dfff.Payload(agent.UNSPECIFIED,payloadData, {sendAsMessage: true,rawPayload:true}))
agent.add("Si tienes otra solicitud, no dudes en describirla a continuación.")  
return sleep("3000")
}

  function intent2(){

    agent.add("Hi Kevin 😀"+"\n\n"+ "Can you share your agency number with me ? ")
    return sleep("3000")
  }

  function intent2SP(){
    var payloadData = {}
    agent.add("Hola Kevin 😀"+"\n\n"+ "¿Puedes compartir tu código de agencia conmigo?")
    agent.add( new dfff.Payload(agent.UNSPECIFIED,payloadData, {sendAsMessage: true,rawPayload:true}))
    return sleep("3000")

    
  }

  function intent3(){
         
          agent.add("Sorry to hear that."+"\n\n"+"Do not worry, I am here to help you! 😄 ")
          return sleep("3000")
  }

function intent4(){
         
  agent.add("¡Hola soy Maya! ¿Cuál es tu nombre? 😄 ")
  return sleep("3000")
}

function intent5(){
         
  agent.add("Lamento escucharlo, No te preocupes, estamos para apoyarte 😄 ")
  return sleep("3000")
}

        var intentMap = new Map();
       intentMap.set('Default Welcome Intent',custompayload)
        intentMap.set('Agent_owner',custompayload2)
        intentMap.set('welcom4',custompayload2SP)
        intentMap.set('welcome5',intent5)
        intentMap.set('prueba2',intent2)
        intentMap.set('welcom3',intent2SP)
        intentMap.set('prueba3',custompayload2)
        intentMap.set('prueba4',intent3)
        intentMap.set('Welcome2',intent4)
        agent.handleRequest(intentMap);
});

app.listen(3333,()=>console.log("server is live at port 3333"));