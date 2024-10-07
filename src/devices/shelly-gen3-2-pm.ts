import { component, Device, MultiProfileDevice } from './base';
import {
  BluetoothLowEnergy,
  Cloud,
  Cover,
  Input,
  Mqtt,
  OutboundWebSocket,
  Script,
  Switch,
  WiFi,
} from '../components';

export class ShellyGen32Pm extends MultiProfileDevice {
  static readonly model: string = "S3SW-002P16EU";
  static readonly modelName: string = "Shelly 2PM Gen3";

  @component
  readonly wifi = new WiFi(this);

  @component
  readonly bluetoothLowEnergy = new BluetoothLowEnergy(this);

  @component
  readonly cloud = new Cloud(this);

  @component
  readonly mqtt = new Mqtt(this);

  @component
  readonly outboundWebSocket = new OutboundWebSocket(this);

  @component
  readonly cover0 = new Cover(this, 0);

  @component
  readonly input0 = new Input(this, 0);

  @component
  readonly input1 = new Input(this, 1);

  @component
  readonly switch0 = new Switch(this, 0);

  @component
  readonly switch1 = new Switch(this, 1);

  @component
  readonly script = new Script(this);
}

Device.registerClass(ShellyGen32Pm);