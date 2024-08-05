import React from "react";

function ScreenReaderAccess() {
  return (
    <>
      <div className="card mb-3  borderforcard paddingAboutMsbte">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">Screen Reader Access</h1>
        </div>
        <div className="row g-0">
          <div className="card-body removePadding">
            <div className="row p-2">
              <table>
                <thead>
                  <tr>
                    <th class="tbl_heading" scope="col">
                      Screen Reader
                    </th>
                    <th class="tbl_heading" scope="col">
                      Website
                    </th>
                    <th class="tbl_heading" scope="col">
                      Free / Commercial
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Screen Access For All (SAFA)</td>
                    <td>
                      <a
                        href="https://www.nabdelhi.org/NAB_SAFA.htm"
                        target={"_blank"}
                      >
                        www.nabdelhi.org/NAB_SAFA.htm
                      </a>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>Non Visual Desktop Access (NVDA)</td>
                    <td>
                      <a href="https://www.nvda-project.org/" target={"_blank"}>
                        www.nvda-project.org/
                      </a>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>System Access To Go</td>
                    <td id="safa">
                      <a href="https://www.satogo.com/" target={"_blank"}>
                        www.satogo.com/
                      </a>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>Thunder</td>
                    <td>
                      <a
                        href="https://www.screenreader.net/index.php?pageid=2"
                        target={"_blank"}
                      >
                        www.screenreader.net/index.php?pageid=2
                      </a>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>WebAnywhere</td>
                    <td>
                      <a
                        href="https://webinsight.cs.washington.edu/projects/webanywhere/"
                        target={"_blank"}
                      >
                        webinsight.cs.washington.edu/projects/webanywhere/
                      </a>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>Hal</td>
                    <td>
                      <a
                        href="https://www.yourdolphin.com/products?id=3"
                        target={"_blank"}
                      >
                        www.yourdolphin.com/products?id=3
                      </a>
                    </td>
                    <td>Commercial</td>
                  </tr>
                  <tr>
                    <td>JAWS</td>
                    <td>
                      <a
                        href="https://www.freedomscientific.com/Downloads/JAWS"
                        id="safa7"
                      >
                        www.freedomscientific.com/Downloads/JAWS
                      </a>
                    </td>
                    <td>Commercial</td>
                  </tr>
                  <tr>
                    <td>Supernova</td>
                    <td>
                      <a
                        href="https://www.yourdolphin.com/product?id=4"
                        target={"_blank"}
                      >
                        www.yourdolphin.com/product?id=4
                      </a>
                    </td>
                    <td>Commercial</td>
                  </tr>
                  <tr>
                    <td>Window-Eyes</td>
                    <td>
                      <a
                        href="https://www.gwmicro.com/Window-Eyes/"
                        target={"_blank"}
                      >
                        www.gwmicro.com/Window-Eyes/
                      </a>
                    </td>
                    <td>Commercial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScreenReaderAccess;
