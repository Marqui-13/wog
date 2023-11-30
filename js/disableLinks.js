<script>
        // Function to handle link clicks
        function disableLink(event) {
            // Prevent the default behavior of the link (navigation)
            event.preventDefault();
            // Optionally, you can add your own logic here to handle the disabled link
            console.log("Link is disabled.");
        }

        // Get the links by their IDs
        var link1 = document.getElementById('link1');
        var link2 = document.getElementById('link2');
        var link3 = document.getElementById('link3');

        // Add click event listeners to the links
        link1.addEventListener('click', disableLink);
        link2.addEventListener('click', disableLink);
        link3.addEventListener('click', disableLink);
</script>