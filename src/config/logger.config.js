const winston= require('winston');

const allowedTransports=[];

allowedTransports.push(new winston.transports.Console({
    format:winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:"YYYY MM DD HH:MM:SS"
        }),
        winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]:${log.message}`)
    )}
));


allowedTransports.push(new winston.transports.File({
    filename:'app.log'
}))

const logger=winston.createLogger({
    format:winston.format.combine(
        winston.format.timestamp({
            format:"YYYY MM DD HH:MM:SS"
        }),
        winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]:${log.message}`)
    ),
    transports:allowedTransports

});

module.exports=logger;