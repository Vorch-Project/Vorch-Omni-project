当前webpage中存在四个文件夹，
audio-driven
    case1
        captioin.txt 这个是给模型的Prompt
        driving_audio.wav 这个是驱动音频
        first_frame.jpg 这个是首帧
        generate.mp4 这个是生成视频
    case2
        同上

reference_based_generation
    audio_ip
        case1
            caption.txt 这个是给模型的Prompt
            subject_01_audio.wav 这个是参考音频1
            subject_01_image.jpg 这个是参考subject1
            subject_02_audio.wav 这个是参考音频2
            subject_02_image.jpg 这个是参考subject2
            subject_03_audio.wav 这个是参考音频3
            subject_03_image.jpg 这个是参考subject3
            generate.mp4 这个是生成视频
        case2
            同上
        case3
            同上
        case4
            同上
        case5
            同上

ip
    case1
        caption.txt 这个是给模型的Prompt
        1_reference.jpg 这个是参考subject1
        2_reference.jpg 这个是参考subject2
        generate.mp4 这个是生成视频
    case2
        同上
    case3
        同上
    case4
        同上
    case5
        同上

multi_frames
    case1
        caption.txt 这个是给模型的Prompt
        image.png 这个是首帧
        image_2.png 这个是中间帧
        generate.mp4 这个是生成视频
    case2
        同上
    case3
        caption.txt 这个是给模型的Prompt
        image.png 这个是首帧
        image_2.png 这个是尾帧
        generate.mp4 这个是生成视频

one_shot
    case1
        caption.txt 这个是给模型的Prompt
        image.png 这个是首帧
        generate.mp4 这个是生成视频
    case2
        同上
    case3
        同上
    case4
        同上

replace
    case1
        prompt.txt 这个是给模型的Prompt
        cond_video.mp4 这个是参考视频
        ref_img.png 这个是参考subject
        result.mp4 这个是生成视频
    case2
        prompt.txt 这个是给模型的Prompt
        cond_video.mp4 这个是参考视频
        ref_img.png 这个是参考subject
        result.mp4 这个是生成视频
    case3
        prompt.txt 这个是给模型的Prompt
        cond_video.mp4 这个是参考视频
        ref_img.png 这个是参考subject
        result.mp4 这个是生成视频

transfrom_ip
    case1
        caption.txt 这个是给模型的Prompt
        condition.mp4 这个是参考视频
        image.png 这个是参考subject
        generate.mp4 这个是生成视频
    case2
        同上
    case3
        caption.txt 这个是给模型的Prompt
        condition.mp4 这个是参考视频
        image.jpeg 这个是参考subject
        image_2.jepg 这个是参考subject
        generate.mp4 这个是生成视频

video_edit
    edit_with_ip
        case1
        case2
    semantic_edit
        case1
        case2
        case3
        case4
        case5
    style_edit

video_extenstion
    case1
    case2


video_edit和video_extenstion里面怎么分布的我就不具体写了，和上面基本一样。
我现在想让你回想下你看到的论文的一些project page，选择出你觉得好看的主页，为当前的这些视频做一个主页。
主页中可以简单描述下方法，你可以查看 "/mnt/pfs-write/users/maxin/works/unified_video_gen/technical_report/latex/main.tex" 中的方法部分。
还需要注意的是在给定prompt的时候，若prompt是中文的，你需要提供英语的翻译版本


注意在以下ip中，case2发生了替换，新增了case6到case9，请对应修改下webpage
ip
    case1
        caption.txt 这个是给模型的Prompt
        1_reference.jpg 这个是参考subject1
        2_reference.jpg 这个是参考subject2
        generate.mp4 这个是生成视频
    case2
        同上
    case3
        同上
    case4
        同上
    case5
        同上

同时，首页的那个Synchronized A/V 和 sound on按钮有遮挡，修妖修正下

点击网页上的参考图的时候，能不能显示全图呢？

论文的名字发生了变化，更改为Vorch-Omni: Multi-Task Orchestration of Sight and Sound，请修改webpage，在how it works 旁边在新增一个paper的按钮，网页链接先用本webpage占位