
    var blks = []
    function makeworld(x,y,z) { // size x,y,z
        blks = Array.from(Array(y),_=>Array.from(Array(x),_=>Array(z).fill(1)));
        console.log(blks)
        for (i=0;i<20;i++) {
            blks[Math.floor(Math.random()*y)][Math.floor(Math.random()*x)][Math.floor(Math.random()*z)] = 0
        }
        for (let ly=0;ly<y;ly++) {
            for (let lx=0;lx<x;lx++) {
                blks[ly][lx][0] = 0
            }
        }
    }

    function datato3d() {
        x = blks[0].length;
        y = blks.length;
        z = blks[0][0].length;
        objid = 1
        scene["game"] = [[0],[]];
        fmaze = scene["game"][1];
        c = [212,210,254];
        for (let ly=0;ly<y;ly++) {
            for (let lx=0;lx<x;lx++) {
                for(let lz=0;lz<z;lz++) {
                    if (blks[ly][lx][lz]==0) {
                        // 上面
                        if (!(lx>0&&blks[ly][lx][lz+1]==0)) {
                            fmaze.push([[lx,ly,lz+1],[lx+1,ly,lz+1],[lx+1,ly+1,lz+1],[0],[c[0]],[c[1]],[c[2]],[0],[objid]])
                            fmaze.push([[lx,ly+1,lz+1],[lx,ly,lz+1],[lx+1,ly+1,lz+1],[0],[c[0]],[c[1]],[c[2]],[0],[objid]])
                        }
                        // 底面
                        if (!(lx>0&&blks[ly][lx][lz-1]==0)) {
                            fmaze.push([[lx,ly,lz+0],[lx+1,ly+1,lz+0],[lx+1,ly,lz+0],[0],[c[0]],[c[1]],[c[2]],[0],[objid]])
                            fmaze.push([[lx,ly+1,lz+0],[lx+1,ly+1,lz+0],[lx,ly,lz+0],[0],[c[0]],[c[1]],[c[2]],[0],[objid]])
                        }
                        // 横面
                        if (!(lx>0&&blks[ly][lx-1][lz]==0)) {
                            fmaze.push([[lx,ly,lz+0],[lx,ly,lz+1],[lx,ly+1,lz+0],[0],[c[0]],[c[1]],[c[2]],[0],[objid]]);
                            fmaze.push([[lx,ly,lz+1],[lx,ly+1,lz+1],[lx,ly+1,lz+0],[0],[c[0]],[c[1]],[c[2]],[0],[objid]]);
                        }
                        
                        if (!(ly<y-1&&blks[ly+1][lx][lz]==0)) {
                            fmaze.push([[lx,ly+1,lz+0],[lx,ly+1,lz+1],[lx+1,ly+1,lz+1],[0],[c[0]],[c[1]],[c[2]],[0],[objid]]);
                            fmaze.push([[lx+1,ly+1,lz+0],[lx,ly+1,lz+0],[lx+1,ly+1,lz+1],[0],[c[0]],[c[1]],[c[2]],[0],[objid]]);
                        }
                        
                        if (!(lx<x-1&&blks[ly][lx+1][lz]==0)) {
                            fmaze.push([[lx+1,ly+1,lz+0],[lx+1,ly+1,lz+1],[lx+1,ly,lz+1],[0],[c[0]],[c[1]],[c[2]],[0],[objid]]);
                            fmaze.push([[lx+1,ly,lz+0],[lx+1,ly+1,lz+0],[lx+1,ly,lz+1],[0],[c[0]],[c[1]],[c[2]],[0],[objid]]);
                        }
                        
                        if (!(ly>0&&blks[ly-1][lx][lz]==0)) {
                            fmaze.push([[lx+1,ly,lz+0],[lx+1,ly,lz+1],[lx,ly,lz+1],[0],[c[0]],[c[1]],[c[2]],[0],[objid]]);
                            fmaze.push([[lx,ly,lz+0],[lx+1,ly,lz+0],[lx,ly,lz+1],[0],[c[0]],[c[1]],[c[2]],[0],[objid]]);
                        }
    
                    }
                }
            }
        }
    }
