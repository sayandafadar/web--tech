import React from "react";
import Button from "../components/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button
          className="mb-5"
          primary
          onClick={() => console.log("Hi there!")}
        >
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          Add To Wishlist!
        </Button>
      </div>
      <div>
        <Button success outline>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
