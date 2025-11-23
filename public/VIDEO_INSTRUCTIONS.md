# Video Background Setup

## Adding Your Gym Video

1. **Video Requirements:**
   - Format: MP4 (H.264 codec recommended)
   - Resolution: 1920x1080 (Full HD) or higher
   - Duration: 10-30 seconds (will loop)
   - File size: Keep under 10MB for better performance

2. **Placement:**
   - Save your video as `gym-video.mp4` in the `public` folder
   - The video will automatically be used in the hero section

3. **Current Setup:**
   - The home page hero section uses a video background
   - If `gym-video.mp4` is not found, it will fall back to a Pexels video URL
   - The video has a dark overlay (80% opacity) to ensure text readability

4. **Recommended Video Content:**
   - Gym equipment in action
   - People working out
   - Dynamic fitness movements
   - Gym atmosphere shots

5. **Optimization Tips:**
   - Compress the video using tools like HandBrake or FFmpeg
   - Use a video compression service if file size is too large
   - Ensure the video is muted (required for autoplay)

## Example Command to Compress Video:

```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec mp2 -crf 23 -preset medium gym-video.mp4
```

