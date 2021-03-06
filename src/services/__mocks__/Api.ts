import * as GraphData from '../__mockData__/getGraphElements';
import { AxiosError } from 'axios';

const fs = require('fs');

export const getNamespaces = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./src/services/__mockData__/getNamespaces.json`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Parse the data as JSON and put in the key entity (just like the request library does)
        resolve(JSON.parse(data));
      }
    });
  });
};

export const getServices = (namespace: String) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./src/services/__mockData__/getServices.json`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Parse the data as JSON and put in the key entity (just like the request library does)
        resolve(JSON.parse(data));
      }
    });
  });
};

export const getGrafanaInfo = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./src/services/__mockData__/getGrafanaInfo.json`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Parse the data as JSON and put in the key entity (just like the request library does)
        resolve(JSON.parse(data));
      }
    });
  });
};

export const getJaegerInfo = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./src/services/__mockData__/getJaegerInfo.json`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Parse the data as JSON and put in the key entity (just like the request library does)
        resolve(JSON.parse(data));
      }
    });
  });
};

export const getGraphElements = (namespace: string, params: any) => {
  if (GraphData.hasOwnProperty(namespace)) {
    return Promise.resolve({ data: GraphData[namespace] });
  } else {
    return Promise.resolve({ data: {} });
  }
};

export const getServiceDetail = (namespace: String, service: String) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./src/services/__mockData__/getServiceDetail.json`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Parse the data as JSON and put in the key entity (just like the request library does)
        resolve(JSON.parse(data));
      }
    });
  });
};

export const getIstioRules = (namespace: String) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./src/services/__mockData__/getIstioRules.json`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Parse the data as JSON and put in the key entity (just like the request library does)
        resolve(JSON.parse(data));
      }
    });
  });
};

export const getIstioRuleDetail = (namespace: String, rule: String) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./src/services/__mockData__/getIstioRuleDetail.json`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Parse the data as JSON and put in the key entity (just like the request library does)
        resolve(JSON.parse(data));
      }
    });
  });
};

export const getServiceHealth = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./src/services/__mockData__/getServiceHealth.json`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Parse the data as JSON and put in the key entity (just like the request library does)
        resolve(JSON.parse(data));
      }
    });
  });
};

export const getNamespaceMetrics = (namespace: String, params: any) => {
  return Promise.resolve({
    data: {
      metrics: {
        request_count_in: { matrix: [] },
        request_error_count_in: { matrix: [] }
      }
    }
  });
};

export const getErrorMsg = (msg: string, error: AxiosError) => {
  let errorMessage = msg;
  if (error && error.response && error.response.data && error.response.data['error']) {
    errorMessage = `${msg} Error: [ ${error.response.data['error']} ]`;
  }
  return errorMessage;
};
