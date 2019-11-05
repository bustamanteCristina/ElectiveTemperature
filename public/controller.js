// basic functionalities

$(document).ready(function() {
    client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
    client.on("connect", function(){
        console.log("Successfully connected");
    })
    client.on("message", function (topic, payload) {
        console.log("Received { topic:"+topic+"; payload: "+payload+" }");
        switch (topic) {
            case "tina/joey":
                $('#tina').val(payload);
                break;
            case "ajocTemp":
                $('#ajoc').val(payload);
                break;
            case "rangiegwapo/temp":
                $('#rangie').val(payload);
                break;
            case "ricameo/temp":
                $('#rica').val(payload);
                break;
            case "yuJudy/temp":
                $('#yubert').val(payload);
                break;
            case "patfaye/temp":
                $('#faye').val(payload);
                break;
            case "leajay/temp":
                $('#JJ').val(payload);
                break;
            case "Madam/temp":
                $('#monica').val(payload);
                break;
            case "dugta/temp":
                $('#nanit').val(payload);
                break;
            case "janeGrace/temp":
                $('#laborada').val(payload);
                break;
            case "iran/toring":
                $('#jorge').val(payload);
                break;
            case "Mars/Ners":
                $('#mars').val(payload);
                break;
        }
    })
    client.subscribe({
        'Mars/Ners' :{qos:0},
        'iran/toring' : {qos:0},
        'patfaye/temp': {qos:0},
        'leajay/temp': {qos:0},
        'dugta/temp': {qos:0},
        'ajocTemp': {qos:0},
        'yuJudy/temp': {qos:0},
        'tina/joey': {qos:0},
        'Madam/temp': {qos:0},
        'janeGrace/temp': {qos:0},
        'ricameo/temp': {qos:0},
        'rangiegwapo/temp': {qos:0},
        })
})
