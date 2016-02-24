"use strict";

describe('Spec for pear and oak tree orchard simulator', function() {
  it('should have a Plant function', function() {
    expect(Plant).toBeDefined();
  });

  it('should have a Tree function', function() {
    expect(Tree).toBeDefined();
  });

  it('should have a function named increaseHeight on the prototype of Plant', function() {
    expect(Plant.prototype.increaseHeight).toBeDefined();
  });

  it('should have a function named decreaseHeight on the prototype of Plant', function() {
    expect(Plant.prototype.decreaseHeight).toBeDefined();
  });

  it('should have a height property on Plant', function() {
    expect(Plant.height).toBeDefined();
  });

  it('should be a function named grow on the prototype of Tree', function() {
    expect(Tree.prototype.grow).toBeDefined();
  });

  it('should be a function named trim on the prototype of Tree', function() {
    expect(Tree.prototype.trim).toBeDefined();
  });

  it('When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))', () => {
    let PearTree = new Tree();
    PearTree.height = 6;
    PearTree.trim(2);
    expect(PearTree.height).toEqual(4);
  });

  it('should decrease the value of branches by 1 when trim method is envoked on the Tree', () => {
    let PearTree = new Tree();
    PearTree.branches = 3;
    PearTree.trim(3); //argument is for tree height
    expect(PearTree.branches).toEqual(2);
  });

  it('When you invoke the grow method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument', () => {
    let PearTree = new Tree();
    PearTree.height = 6;
    PearTree.grow(2);
    expect(PearTree.height).toEqual(8);
  });

});