import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Tree } from './index';

const mock = [{
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
    <Tree treeData={mock} />
  )
}

describe('TreeBranch component', () => {
  it('Should render the component TreeBranch container', () => {
    mockComponent();
    expect(screen.getByTestId('tree-container')).toBeInTheDocument();
  });

  it('Should not show the name of child items', () => {
    mockComponent();
    const childNameMock = 'Luis F. Doris';
    const searchChildName = screen.queryByLabelText(childNameMock);
    expect(searchChildName).not.toBeInTheDocument();
  });

  it('Should show the name of child items', () => {
    mockComponent();
    const childNameMock = 'Luis F. Doris';
    const getButton = screen.getByTestId('show-branches')
    fireEvent.click(getButton);
    const searchChildName = screen.queryByLabelText(childNameMock);
    expect(searchChildName).toBeInTheDocument();
  });
})