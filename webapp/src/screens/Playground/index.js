import React from "react";
import { get, set } from "idb-keyval";

const Playground = () => {
  set("key", "value");
  console.log("set-DONE");

  get("key")
    .then((value) => {
      console.log("GET: ", value);
    })
    .catch((err) => {
      console.log(err);
    });

  return <div></div>;
};

export default Playground;
