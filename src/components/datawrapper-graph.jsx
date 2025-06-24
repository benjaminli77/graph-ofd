function DatawrapperGraph({ src, height = "496px" }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <iframe
        title="Global CO2 emissions by fuel and industry"
        aria-label="Interactive area chart"
        id="datawrapper-chart-vYw9i"
        src={src}
        scrolling="no"
        frameBorder="0"
        style={{ border: "none" }}
        width="100%"
        height={height}
        data-external="1"
      ></iframe>{" "}
    </div>
  );
}

export default DatawrapperGraph;
