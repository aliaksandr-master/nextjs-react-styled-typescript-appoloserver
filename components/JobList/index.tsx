import React from 'react';
import styled from 'styled-components';

// this interface defines the shape of the data returned by the jobs query.
export interface IJob {
  id: string;
  applyUrl: string;
  title: string;
  company: {
    name: string;
  };
}

interface IProps {
  jobs: IJob[];
}

const List = styled.ul``;
const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const JobList = ({ jobs }: IProps) => {
  return (
    <List>
      {jobs.map((job) => (
        <ListItem key={job.id}>
          {job.title} by {job.company.name} [
          <a href={job.applyUrl} target="_blank" rel="noreferrer">
            Apply
          </a>
          ]
        </ListItem>
      ))}
    </List>
  );
};

export default JobList;
