import { Message } from 'paho-mqtt';
export { Client, Message } from 'paho-mqtt';
export interface MqttCallbackOptions {
    onConnectionSuccess?: (clientId: string, topic: string) => void;
    onConnectionFailure?: (clientId: string, event: Paho.MQTT.ErrorWithInvocationContext) => void;
    onConnectionLost?: (clientId: string, event: Paho.MQTT.MQTTError) => void;
    onMessageArrived?: (clientId: string, message: Message) => void;
}
export declare class MqttPahoClient {
    /**
    * Change this flag appropriately
    */
    private useSSL;
    private isLocal;
    /**
     * Connection parameters
     */
    private port;
    private protocol;
    private host;
    private brokerUrl;
    /**
     * Note:
     * Paho-Mqtt uses WebSockets to connect to an MQTT Broker.
     */
    /**
     * Note:
     * For local host, the wss not works with `localhost`
     */
    private username;
    private password;
    private clientId;
    private RECONNECT_TIMEOUT;
    private SELF_CHECK_TOPIC;
    private client;
    callbacks?: MqttCallbackOptions;
    private selfTopic;
    private _t0;
    constructor(callbacks?: MqttCallbackOptions);
    connect: () => Promise<unknown>;
    subscribe: (topic: string) => this;
    publish: (topic: string, message: string) => this;
    disconnect: () => void;
    private logE;
    private logI;
    private logS;
}
