var mockExport = jest.genMockFromModule('../../app/actions/index');

mockExport.getVolumeOfMessagesByHour.mockImplementation((obj) => {
  var success = new Promise((resolve) => {

  });

  return success;
});

export default mockExport;