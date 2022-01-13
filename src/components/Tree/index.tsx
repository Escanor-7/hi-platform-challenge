import { TreeBranch } from '../TreeBranch/index';
import { TreeDataProps } from '../../App';

type TreeProps = {
  treeData: TreeDataProps[];
  checked?: boolean | undefined;
}

export const Tree = ({ treeData, checked }: TreeProps) => {

  return (
    <div data-testid='tree-container' >
      {treeData.map((treeItem: TreeDataProps) => {
        const children = Object.values(treeItem.children);

        return (
          <TreeBranch
            key={treeItem.id}
            treeItem={treeItem}
            children={children}
            checked={checked}
          />
        )
      })}
    </div>
  )
}