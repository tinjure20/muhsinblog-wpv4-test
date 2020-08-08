// src/components/menu.js
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "../utils/universalLink"
import style from "../styles/scss/mainNav.module.css"

const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary-menu" }) {
        name
        menuItems {
          nodes {
            label
            url

            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <nav className={style.navigation}>
      <ul>
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

        // const itemId = "menu-item-" + menuItem.menuItemId

          return (
            <li
            //  id={itemId}
              key={i + menuItem.url}
              //className={
                //"menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
              // itemId
            //  }
            >
              <UniversalLink
                to={path}
              //  activeClassName={"current-menu-item current_page_item"}
              >
                {menuItem.label}
              </UniversalLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu
