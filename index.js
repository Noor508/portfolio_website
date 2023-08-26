function downloadResume() {
  // Replace this link with your actual resume link
  var resumeLink = 'https://drive.google.com/file/d/1yltZB5yXElPayFPuD2mSSE9ZyKK5ZCRF/view?usp=drive_link';

  // Create an anchor element to trigger the download
  var anchor = document.createElement('a');
  anchor.href = resumeLink;
  anchor.target = '_blank'; // Open in a new tab/window
  anchor.download = 'Noor_Ul_Ain_Resume.pdf'; // Change the filename as needed
  anchor.click();
}



var typed = new Typed('#element', {
  strings: ['Full Mern Stack Developer', 'UI/UX designer', 'Video Editor', 'Database Manager', 'Youtuber'],
  typeSpeed: 50,
});


function visitGithub()
{
  var git ="https://github.com/Noor508"
  var anchor = document.createElement('a');
  anchor.href = git;
  anchor.target = '_blank'; // Open in a new tab/window
  anchor.click();

}