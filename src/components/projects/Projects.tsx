import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function Projects() {
  return (
    <div className="w-full py-6">
      <h2 className="lg:text-3xl font-semibold text-center py-2">Projects</h2>
      <div className="flex flex-col">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Languages</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
