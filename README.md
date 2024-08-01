# node-shellies-ds9

[![npm-version](https://badgen.net/npm/v/shellies-ds9)](https://www.npmjs.com/package/shellies-ds9)

Handles communication with the next generation of Shelly devices. This Package is only to pimp up the existing package https://badgen.net/npm/v/shellies-ng. Because I'm lost if my Minis don't run in the Homebridge.
If Alex creates a new version of his package that supports the Mini devices, I will delete this package again. thx@sw-koenig...

For the first generation, see [node-shellies](https://github.com/alexryd/node-shellies).

## Supported devices

- [Shelly Plus 1 + V3](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1)
- [Shelly Plus 1 PM + V3](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1PM)
- [Shelly Plus 1 Mini + V3](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1)
- [Shelly Plus 1 PM Mini + V3](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1PM)
- [Shelly Plus PM Mini + V3](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusPMMini)
- [Shelly Plus 2 PM](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus2PM)
- [Shelly Plus I4 +V3](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusI4)
- [Shelly Plus Plug US](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlugUS)
- [Shelly Plus H&T +V3](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusHT)
- [Shelly Plus 0-10V Dimmer](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus10V)
- [Shelly Dimmer 0/1-10V PM](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyDimmer0110VPMG3) <sup>1</sup>
- [Shelly Pro 1](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPro1)
- [Shelly Pro 1 PM](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPro1PM)
- [Shelly Pro 2](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPro2)
- [Shelly Pro 2 PM](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPro2PM)
- [Shelly Pro 3](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPro3)
- [Shelly Pro 4 PM](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPro4PM)
- [Shelly Pro Dual Cover PM](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyProDualCoverPM)
- [Shelly Pro Dimmer 1PM](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyProDimmer1PM)
- [Shelly Pro Dimmer 2PM](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyProDimmer2PM)

<sup>1</sup> Support for outbound websockets is a work in progress.

## Basic usage example

```typescript
import {
  Device,
  DeviceId,
  MdnsDeviceDiscoverer,
  Shellies,
  ShellyPlus1,
} from "shellies-ds9";

const shellies = new Shellies();

// handle discovered devices
shellies.on("add", async (device: Device) => {
  console.log(`${device.modelName} discovered`);
  console.log(`ID: ${device.id}`);

  // use instanceof to determine the device model
  if (device instanceof ShellyPlus1) {
    const plus1 = device as ShellyPlus1;

    // toggle the switch
    await plus1.switch0.toggle();
  }
});

// handle asynchronous errors
shellies.on("error", (deviceId: DeviceId, error: Error) => {
  console.error("An error occured:", error.message);
});

// create an mDNS device discoverer
const discoverer = new MdnsDeviceDiscoverer();
// register it
shellies.registerDiscoverer(discoverer);
// start discovering devices
discoverer.start();
```

See [homebridge-shelly-ng]() for a real-world example.
