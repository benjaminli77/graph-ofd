import DatawrapperGraph from '@/components/datawrapper-graph'
import React from 'react'

function GraphTwo() {
  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold text-center mb-12">
        Graph with Datawrapper
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <DatawrapperGraph
          src="https://datawrapper.dwcdn.net/vYw9i/1/"
          height="600px"
        />
        <DatawrapperGraph
          src="https://datawrapper.dwcdn.net/NFUb0/1/"
          height="600px"
        />
        <DatawrapperGraph
          src="https://datawrapper.dwcdn.net/vYw9i/1/"
          height="600px"
        />
        <DatawrapperGraph
          src="https://datawrapper.dwcdn.net/vYw9i/1/"
          height="600px"
        />
        <DatawrapperGraph
          src="https://datawrapper.dwcdn.net/vYw9i/1/"
          height="600px"
        />
      </div>
    </div>
  );
}

export default GraphTwo