var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client(),
    producer = new HighLevelProducer(client);

// for(var i = 0;i < 1000; i++) payloads[0].messages.push('message'+i);
producer.on('ready', function () {
    console.log("Kafka Producer is connected and ready.");
});

var KafkaService = function () {
};

KafkaService.prototype.sendRecord = function (positions, callback) {
    console.log(positions);
    var record = [
        { topic: 'test', messages: [JSON.stringify(positions)] }
    ];
    producer.send(record, function (err, data) {
        if(err) {
            callback(err);
        } else {
            callback(data);
        }
    });
};

module.exports = new KafkaService();