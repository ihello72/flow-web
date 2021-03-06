import React, { Fragment } from 'react';
import Store from 'store';
import styled from 'styled-components';

import Header from 'Components/Header';
import NoticeWrite from 'Components/NoticeWrite';
import NoticeList from 'Components/NoticeList';

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 50px;
`;

const WriteContainer = styled.div`
    grid-start-column: 1;
    padding-left: 40px;
`;

const ViewContainer = styled.div`
    grid-start-column: 2;
    padding-left: 40px;
`;

const Title = styled.h3`
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 50px;
`;

const NoticePresenter = () => {
    return (
        <Fragment>
            <Header />
                <Store.Consumer>
                  {store => {
                    console.info('current store: ', store);
                    return (
                        <Container>
                            <WriteContainer>
                                <Title>공지 작성</Title>
                                <NoticeWrite
                                    writeNotice={store.writeNotice}
                                    fileUpload={store.fileUpload}
                                />
                            </WriteContainer>
                            <ViewContainer>
                                <Title>공지 리스트</Title>
                                <NoticeList list={store.list} />
                            </ViewContainer>
                        </Container>
                    );
                  }}
                </Store.Consumer>
        </Fragment>
    );
};

export default NoticePresenter;