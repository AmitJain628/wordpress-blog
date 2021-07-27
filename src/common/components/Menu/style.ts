import styled from 'styled-components';

export const StyledMenu = styled.header`
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
    position: fixed;
    width: 100%;
    z-index: 3;
    ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

 li a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
}

 li a:hover,
 .menu-btn:hover {
  background-color: #f4f4f4;
}

 .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

 .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

 .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

 .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

 .menu-icon .navicon:before,
 .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

 .menu-icon .navicon:before {
  top: 5px;
}

 .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

 .menu-btn {
  display: none;
}

 .menu-btn:checked ~ .menu {
  max-height: 240px;
}

 .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  li {
    float: left;
  }
    li a {
    padding: 20px 30px;
  }
    .menu {
    clear: none;
    max-height: none;
  }
    .menu-icon {
    display: none;
  }
}
`;
