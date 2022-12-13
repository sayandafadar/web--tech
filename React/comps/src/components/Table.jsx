import React from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return (
        <React.Fragment key={column.label}>{column.header()}</React.Fragment>
      );
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRow = data.map((rowData) => {
    const renderdCells = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderdCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRow}</tbody>
    </table>
  );
}

export default Table;
