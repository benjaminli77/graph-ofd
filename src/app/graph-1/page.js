import FlourishGraph from "@/components/flourish-graph";

function GraphOne() {
  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold text-center mb-12">Graph with Flourish</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <FlourishGraph
          src="https://flo.uri.sh/visualisation/23888798/embed"
          height="600px"
        />
        <FlourishGraph
          src="https://flo.uri.sh/visualisation/23888798/embed"
          height="600px"
        />
        <FlourishGraph
          src="https://flo.uri.sh/visualisation/23888798/embed"
          height="600px"
        />
        <FlourishGraph
          src="https://flo.uri.sh/visualisation/23888798/embed"
          height="600px"
        />
        <FlourishGraph
          src="https://flo.uri.sh/visualisation/23888798/embed"
          height="600px"
        />
      </div>
    </div>
  );
}

export default GraphOne;
