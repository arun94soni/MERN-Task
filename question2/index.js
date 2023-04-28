const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// BaseSchema for extending
const BaseSchema = new Schema({}, { timestamps: true });

// WorksnapsTimeEntry schema
const WorksnapsTimeEntrySchema = BaseSchema.extend({
  student: {
    type: Schema.ObjectId,
    ref: 'Student',
  },
  timeEntries: {
    type: Object,
  },
});

// Student schema
const StudentSchema = BaseSchema.extend({
  firstName: {
    type: String,
    trim: true,
    default: '',
  },
  lastName: {
    type: String,
    trim: true,
    default: '',
  },
  displayName: {
    type: String,
    trim: true,
  },
  municipality: {
    type: String,
  },
});

// Mongoose models
const WorksnapsTimeEntry = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntrySchema);
const Student = mongoose.model('Student', StudentSchema);

// Fetch all students and their time entries
Student.find()
  .then(students => {
    students.forEach(student => {
      WorksnapsTimeEntry.find({ student: student._id })
        .then(timeEntries => {
          console.log(`Student: ${student.displayName}`);
          console.log('Time entries:', timeEntries);
        })
        .catch(err => console.error('Error fetching time entries:', err));
    });
  })
  .catch(err => console.error('Error fetching students:', err));
