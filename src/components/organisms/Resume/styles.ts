import styled, { keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;

  gap: 0.5rem 1rem;

  animation: ${show} ${({ theme }) => theme.transition.slow};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  object-fit: cover;

  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  flex: 1;

  min-width: 0;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Label = styled.h5`
  margin: 0;

  font-size: 12px;
`;

export const Value = styled.h3`
  margin: 0;

  font-size: 16px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
