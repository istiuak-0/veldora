import { isRef, reactive, type Ref, type UnwrapNestedRefs } from 'vue';

const serviceRegistry = new Map<any, any>();

// export function Provide() {
//   return function <T extends { new (...args: any[]): {} }>(constructor: T) {

//     const WrappedClass = class extends constructor {
//       constructor(...args: any[]) {
//         super(...args);


//         Object.keys(this).forEach(key => {
//           const value = (this as any)[key];

//           if (isRef(value)) {
//             const refValue = value as Ref;

//             // Replace with getter/setter
//             Object.defineProperty(this, key, {
//               get() {
//                 return refValue.value;
//               },
//               set(newValue) {
//                 refValue.value = newValue;
//               },
//               enumerable: true,
//               configurable: true,
//             });
//           }
//         });
//       }
//     };
//     const instance = new WrappedClass();
//     serviceRegistry.set(WrappedClass, instance);

//     return WrappedClass as T;
//   };
// }

// export function Inject<T>(serviceClass: new (...args: any[]) => T): T {
//   const service = serviceRegistry.get(serviceClass);

//   if (!service) {
//     throw new Error(`Service not found. Did you forget @Provide() on ${serviceClass.name}?`);
//   }

//   return service as T;
// }
// export function Provide() {
//   return function <T extends { new (...args: any[]): {} }>(constructor: T) {
//     // Just create instance and register - no unwrapping!
//     const instance = new constructor();
//     serviceRegistry.set(constructor, instance);
    
//     return constructor;
//   };
// }


export function Provide() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    // Just create singleton, no reactive() wrapper
    const instance = new constructor();
    serviceRegistry.set(constructor, instance);
    return constructor;
  };
}

export function Inject<T>(serviceClass: new (...args: any[]) => T): T {
  const service = serviceRegistry.get(serviceClass);
  if (!service) {
    throw new Error(`Service not found. Did you forget @Provide() on ${serviceClass.name}?`);
  }
  return service;
}