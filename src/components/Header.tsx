
import styled from 'styled-components';
import { Link, useMatch } from 'react-router-dom';

const Title = styled.h2`
    font-size: 30px;
    margin: 10px 10px;
    font-family: 'Bebas Neue';
    color: black;
`;

const Menus = styled.ul`
    display: flex;
    font-size: 15px;
    color: black;
    background-color: ${(props) => props.theme.white.darker};
    align-items: center;
`;

const Menu = styled.li`
    display: flex;
    flex-direction: column;
    position: relative;
    color: ${(props) => props.theme.black.darker};
    margin-right: 50px;
    padding-left: 10px;
`;

const Box = styled.span`
    width: auto;
    height: auto;
    background-color: ${(props) => props.theme.white.lighter};
`;

function Header() {
    const careerMatch = useMatch('/career');
    const studyMatch = useMatch('/study');

    return (
        <div>
            <Title>My Dev Blog</Title>
            <Menus>
                <Menu>
                    <Link to={'/career'} style={{color: 'black'}}>
                        Career { careerMatch && <Box />}
                    </Link>
                </Menu>
                <Menu>
                    <Link to={'/study'} style={{color: 'black', }}>
                        Study { studyMatch && <Box />}
                    </Link>
                </Menu>
            </Menus>
        </div>
    );
}

export default Header;