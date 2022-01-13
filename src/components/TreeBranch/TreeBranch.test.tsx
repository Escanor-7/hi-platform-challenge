import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TreeBranch } from './index';

const mock = {
  id: '1',
  name: 'Richard Paul M.',
  children: [{
    id: '2',
    name: 'Luis F. Doris',
    children: []
  }]
}

const mockChildren = [{
  id: '1',
  name: 'Richard Paul M.',
  children: [{
    id: '2',
    name: 'Luis F. Doris',
    children: []
  }]
}]

const mockComponent = () => {
  return render(
    <TreeBranch treeItem={mock} children={mockChildren} checked />
  )
}

describe('TreeBranch component', () => {
  it('Should render the component TreeBranch container', () => {
    mockComponent();
    expect(screen.getByTestId('tree-branch-container')).toBeInTheDocument();
  });

  it('Should not render the component TreeBranch container', () => {
    mockComponent();
    expect(screen.queryByTestId('tree-branch')).not.toBeInTheDocument();
  });

  it('Should show parent item name', () => {
    mockComponent();
    const parentNameMock = 'Richard Paul M.';
    const searchParentName = screen.getByLabelText(parentNameMock);
    expect(searchParentName).toBeInTheDocument();
  });

  it('Should not show parent item name', () => {
    mockComponent();
    const parentNameMock = 'Richard';
    const searchParentName = screen.queryByLabelText(parentNameMock);
    expect(searchParentName).not.toBeInTheDocument();
  });
})