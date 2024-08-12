import React, { useContext, useEffect, useState } from "react";
import API from "../API";
import { ShowContext } from "../App";

// const footer = {
//   title: "Footer",
//   menu_url: "",
//   children: [
//     { title: "Home ", menu_url: "/" },
//     { title: "About", menu_url: "/about" },
//     {
//       title: "Institutes",
//       menu_url: "/institute",
//     },
//     {
//       title: "Examination",
//       menu_url: "/examination",
//     },
//     { title: "Admission ", menu_url: "/admission" },
//     { title: "Affiliation", menu_url: "/affilation" },
//     { title: "Contact ", menu_url: "/contact" },
//     { title: "Site map", menu_url: "/sitemap" },
//   ],
// };

function SiteMap() {
  const { setShow, setMsg } = useContext(ShowContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    getMenu(setList, setShow, setMsg);
  }, []);

  function MenuItem({ item }) {
    return item.children && item.children.length > 0 ? (
      <li className="pl-2">
        <span className="font-14">{item.title}</span>
        <ul className="" aria-labelledby="">
          {item.children.map((rec) => (
            <li>
              <a
                className="link-primary font-12"
                href={rec.menu_url || "#"}
                target={
                  rec.menu_url &&
                  (rec.menu_url.includes("https://") ||
                    rec.menu_url.includes("http://"))
                    ? "_blank"
                    : "_self"
                }
              >
                {rec.title}
              </a>
              {rec.children && rec.children.length > 0 && (
                <ul className="pl-2">
                  {rec.children.map((i) => (
                    <li>
                      <a
                        className="link-primary"
                        href={i.menu_url}
                        target={
                          i.menu_url &&
                          (i.menu_url.includes("https://") ||
                            i.menu_url.includes("http://"))
                            ? "_blank"
                            : "_self"
                        }
                      >
                        {i.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </li>
    ) : (
      <li className="">
        <a
          className="text-dark"
          href={item.menu_url}
          target={
            item.menu_url &&
            (item.menu_url.includes("https://") ||
              item.menu_url.includes("http://"))
              ? "_blank"
              : "_self"
          }
        >
          {item.title}
        </a>
      </li>
    );
  }
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">Site Map</h1>
        </div>
        <div className="row g-0">
          <div className="card-body removePadding">
            <div className="px-2 mx-3">
              {console.log(list)}
              {list &&
                list.length > 0 &&
                list.map((item, index) => (
                  <MenuItem
                    item={item}
                    last={index === list.length}
                    key={index}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function getMenu(setList, setShow, setMsg) {
  API.get("homemenu")
    .then((res) => {
      if (res.data.status === "success") {
        const arrayToTree = (arr, parent_id = 0) =>
          arr
            .filter((item) => item.parent_id === parent_id)
            .map((child) => ({
              ...child,
              children: arrayToTree(arr, child.id),
            }));
        let list = arrayToTree(res.data.data, 0);
        setList([...list]);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.message);
    });
}

export default SiteMap;
