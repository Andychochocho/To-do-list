describe ("Task",function(){
  it("will add tasks to be completed", function() {
    var testTask = new Task ("Taking the trash out")
    expect(testTask.trash).to.equal("Taking the trash out");
  });
});
