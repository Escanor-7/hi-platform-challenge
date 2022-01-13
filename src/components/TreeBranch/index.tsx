import { useState, useEffect } from "react";
import { Tree } from "../Tree/index";
import * as S from './TreeBranch.styles';
import { TreeDataProps } from '../../App';

type TreeBranchProps = {
  treeItem: TreeDataProps;
  children: Array<TreeDataProps>;
  checked?: boolean | undefined;
}

export const TreeBranch = ({ treeItem, children, checked }: TreeBranchProps) => {
  const [branches, setBranches] = useState(false);
  const [boxChecked, setBoxChecked] = useState(Boolean);
  const treeBranch = Object.values(children);

  useEffect(() => {
    let visibleBranches: string[] = JSON.parse(localStorage.getItem("branches") || "[]") || [];

    if (branches) {
      localStorage.setItem(
        "branches",
        JSON.stringify([...visibleBranches, treeItem.id])
      );
    } else {
      const items = visibleBranches.filter((id: string) => id !== treeItem.id);
      localStorage.setItem("branches", JSON.stringify(items));
    }
  }, [branches, treeItem]);

  useEffect(() => {
    if (checked) {
      setBoxChecked(checked);
    } else {
      const checkboxes: string[] = JSON.parse(localStorage.getItem("checkeds") || "[]") || [];

      checkboxes.map((check: string) => {
        if (check === treeItem.id) {
          setBoxChecked(true);
        }
        return check;
      });
    }
  }, [checked, treeItem]);

  useEffect(() => {
    let checkedNodes: string[] = JSON.parse(localStorage.getItem("checkeds") || "[]") || [];

    if (boxChecked) {
      localStorage.setItem(
        "checkeds",
        JSON.stringify([...checkedNodes, treeItem.id])
      );
    } else {
      const items: string[] = checkedNodes.filter((id) => id !== treeItem.id);
      localStorage.setItem("checkeds", JSON.stringify(items));
    }
  }, [boxChecked, treeItem]);

  return (
    <S.Container data-testid='tree-branch-container' >
      <S.CheckboxContainer >
        <S.CustomCheckbox
          className={boxChecked ? 'checked' : ''}
          defaultChecked={boxChecked}
          onClick={() => setBoxChecked(!boxChecked)}
        />
        <label id={treeItem.name} >
          <input
            type='checkbox'
            checked={boxChecked}
            id={treeItem.id}
            onChange={() => setBoxChecked(!boxChecked)}
          />
          {treeItem.name}
        </label>

        {treeBranch.length > 0 ? (
          <button
            className={branches ? 'show-branches' : ''}
            onClick={() => { setBranches(!branches) }}
            data-testid='show-branches'
          />
        ) : null}
      </S.CheckboxContainer>

      {branches ? (
        <div className='space-left'>
          <Tree treeData={treeBranch} checked={boxChecked} />
        </div>
      ) : null}
    </S.Container>
  )
}