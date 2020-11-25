import firebase from "../config/firebase";
const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();
  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }
  return {
    ...data,
  };
}

// ===========================HOMEPAGE===========================

export function listenToHomepageFromFirestore() {
  return db.collection("HomePage");
}

export function updateHomepageInFirestore(post) {
  return db
    .collection("HomePage")
    .doc(post.id)
    .update({ ...post, edit: false });
}

//================================STEERING COMMITTEE====================

export function listenToMeetingsFromFirestore() {
  return db.collection("Meetings");
}

export function listenToMeetingFromFirestore(meetingId) {
  return db.collection("Meetings").doc(meetingId);
}

export function updateMeetingInFirestore(meeting) {
  return db.collection("Meetings").doc(meeting.id).update(meeting);
}

export function addMeetingToFirestore(meeting) {
  console.log(meeting);
  return db.collection("Meetings").add({
    ...meeting,
  });
}
