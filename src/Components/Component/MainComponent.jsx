import React from 'react';

const UseContextThree = React.createContext();
const UseContextFive = React.createContext();

const UseProviderThree = UseContextThree.Provider;
const UseConsumerThree = UseContextThree.Consumer;

const UseProviderFive = UseContextFive.Provider;
const UseConsumerFive = UseContextFive.Consumer;

export { UseProviderThree, UseConsumerThree, UseProviderFive, UseConsumerFive };
