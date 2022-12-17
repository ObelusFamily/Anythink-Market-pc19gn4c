import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }
  if (props.items.length === 0 && props.term && props.term.length > 0) {
    return (
      <div
        id="empty"
        className="py-4 no-items"
        style={{
          backgroundColor: "#622d84",
          width: "60%",
          height: "150px",
          minWidth: "300px",
          textAlign: "center",
          margin: "20px auto auto auto",
          border: "10px",
        }}
      >
        <img src="https://img.icons8.com/pastel-glyph/64/FFFFFF/sad.png" />
        <div style={{ margin: "10px" }}>
          No items found for "<b>{props.term}</b>".
        </div>
      </div>
    );
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
