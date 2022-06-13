import React, { useState, useEffect, createContext, useMemo } from "react";

import {
  restaurantsTransform,
  restaurantsRequest,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: [] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log("error");
  });
