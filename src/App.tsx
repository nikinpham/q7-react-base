import { Fragment, Key } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout";
import { publicRoutes } from "./routes";
const App = () => {
  return (
    <Router>
      <div className="">
        <Routes>
          {publicRoutes.map(
            (
              route: {
                layout?: any;
                component: any;
                path: string | undefined;
              },
              index: Key | null | undefined
            ) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            }
          )}
        </Routes>
        {/* <Layout>
          <Home />
        </Layout> */}
        {/* <div className="flex h-screen">
          <div className="flex-1 bg-gray-200 p-4">
            <div className="">
              <div className="flex justify-center">
                <div>
                  <Input
                    label="Name"
                    type="text"
                    name="exampleInput"
                    value={inputValue}
                    handleChange={handleChange}
                  />
                </div>
                <div className="grid content-center ml-2">
                  <BButton
                    children={"submit"}
                    type={"submit"}
                    onClick={handleButtonClick}
                    inverted={true}
                  />
                </div>
              </div>
            </div>
            <BDropdown
              options={options}
              onSelect={handleDropdownSelect}
              children={"Open"}
            />
            <div>
              <ProductCard {...productData} />
            </div>
            <div>
              <ProductList products={products} />
            </div>
            <QButton />
          </div>
        </div> */}
      </div>
    </Router>
  );
};

export default App;
