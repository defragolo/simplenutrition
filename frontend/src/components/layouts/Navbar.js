import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import * as userActions from "../../store/actions/userActions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    d

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let userNavBarComp;
        if (this.props.user.logged) {
            userNavBarComp = (<NavItem><NavLink href="/logout/">Logout</NavLink></NavItem>);
        } else {
            userNavBarComp = (
                <div className="div_hori_flex">
                    <NavItem><NavLink className="test" href="/signup/">Sign up</NavLink></NavItem>
                    <NavItem><NavLink href='/login/'>Login</NavLink></NavItem>
                </div>
            );
        }


        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {userNavBarComp}
                            {/*<NavItem>*/}
                            {/*    <NavLink href="/components/">Components</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*<NavItem>*/}
                            {/*    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*<UncontrolledDropdown nav inNavbar>*/}
                            {/*    <DropdownToggle nav caret>*/}
                            {/*        Options*/}
                            {/*    </DropdownToggle>*/}
                            {/*    <DropdownMenu right>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Option 1*/}
                            {/*        </DropdownItem>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Option 2*/}
                            {/*        </DropdownItem>*/}
                            {/*        <DropdownItem divider/>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Reset*/}
                            {/*        </DropdownItem>*/}
                            {/*    </DropdownMenu>*/}
                            {/*</UncontrolledDropdown>*/}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const
    mapStateToProps = (state) => {
        return {
            user: state.user
        }
    }

const
    mapDispatchToProps = (dispatch) => {
        return {
            userActions: bindActionCreators(userActions, dispatch)
        };
    }

export default connect(mapStateToProps, mapDispatchToProps)

(
    NavBar
)
;