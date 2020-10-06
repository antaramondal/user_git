import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";
import RepoDetails from "./RepoDetails";
import { Table, Tag, Space } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      //   render: text => <a>{text}</a>,
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    //   render: text => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>View {record.name}</a>
          </Space>
        ),
      },
]

function Repo() {
  const usercontext = useContext(UserContext);

  let repoClick = (data) => {
    usercontext.usedispatch({ type: "setShowRepos", value: false });
    usercontext.usedispatch({ type: "setRepo", value: data });
  };
  let homeClick = () => {
    usercontext.usedispatch({ type: "setShowRepos", value: true });
  };

  useEffect(() => {
    axios
      .get(usercontext.usestate.user.repos_url)
      .then((res) =>
        usercontext.usedispatch({ type: "setRepoData", value: res.data })
      )
      .catch((err) => console.log(err));
  }, [usercontext.usestate.user]);
  return (
    <div className="repo-main-div">
      <div className="repo-head" >
        Repositories
        {usercontext.usestate.showRepos !== true && (
        <>
          <span>/{usercontext.usestate.repo.id}</span>
          <RollbackOutlined onClick={homeClick} />
          </>
        )}
      </div>
      {usercontext.usestate.showRepos === true ? (
        <div>
            {usercontext.usestate.repoData.length !== 0 &&
            <Table size="small"
             onRow={(record, rowIndex) => {
                return {
                  onClick: event => {repoClick(record)}, // click row
                  onDoubleClick: event => {}, // double click row
                  onContextMenu: event => {}, // right button click row
                  onMouseEnter: event => {}, // mouse enter row
                  onMouseLeave: event => {}, // mouse leave row
                }
            }}
                columns={columns} dataSource={usercontext.usestate.repoData} />}
          {/* <ul>
            {usercontext.usestate.repoData.length !== 0 &&
              usercontext.usestate.repoData.map((repo) => (
                <li key={repo.id} onClick={() => repoClick(repo)}>
                  {repo.id}
                </li>
              ))}
          </ul> */}
        </div>
      ) : (
        <RepoDetails />
      )}
    </div>
  );
}

export default Repo;
