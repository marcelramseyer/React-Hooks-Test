import React from "react";
import useResource from "./useRecource";

const ResourceList = ({ resource }) => {
  const resources = useResource(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
