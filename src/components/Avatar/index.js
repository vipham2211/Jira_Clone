import React from "react";
import { Image } from "./Styles";

export default function Avatar(props) {
  return <Image avatarUrl={props.avatarUrl} {...props} />;
}
