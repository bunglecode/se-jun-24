// tasks.test.js
const { allowDrop, drag, isTaskDescriptionValid } = require('./script');

function formatAssignedTo(name) {
    return `Assigned to: ${name}`;
  }

test('allowDrop should call preventDefault on the event', () => {
  const mockEvent = { preventDefault: jest.fn() };
  allowDrop(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
});

test('drag should set dataTransfer with target id', () => {
  const mockEvent = {
    dataTransfer: {
      setData: jest.fn()
    },
    target: {
      id: 'test-id'
    }
  };
  drag(mockEvent);
  expect(mockEvent.dataTransfer.setData).toHaveBeenCalledWith('text', 'test-id');
});

  
test('isTaskDescriptionValid should return true for non-empty strings', () => {
    expect(isTaskDescriptionValid('Task 1')).toBe(true);
    expect(isTaskDescriptionValid('  Task 2  ')).toBe(true);
    expect(isTaskDescriptionValid('')).toBe(false);
    expect(isTaskDescriptionValid('   ')).toBe(false);
    expect(isTaskDescriptionValid(null)).toBe(false);
    expect(isTaskDescriptionValid(undefined)).toBe(false);
    expect(isTaskDescriptionValid(123)).toBe(false);
});

test('formatAssignedTo should format the assigned to string correctly', () => {
    expect(formatAssignedTo('John')).toBe('Assigned to: John');
    expect(formatAssignedTo('   Jane   ')).toBe('Assigned to:    Jane   ');
});

